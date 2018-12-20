import { warn } from '../Utilities';

export function getValueAndIsControlled<TProps, TValue>(
  componentId: string,
  componentName: string,
  newProps: TProps,
  oldIsControlled: boolean | undefined,
  currentValue: TValue | undefined,
  valueProp: keyof TProps,
  defaultValueProp: keyof TProps,
  isConstructor?: boolean
): { value: TValue | undefined; isControlled: boolean | undefined } {
  // Check if the component should be controlled or uncontrolled according to the new props.
  // We use != null since it's the check used by React's <input>, and it properly accounts for ''.
  // The warning logic also closely follows what React does.
  // See: https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMInput.js
  // tslint:disable:triple-equals
  let newIsControlledFromProps: boolean | undefined;
  if (newProps[valueProp] != null) {
    newIsControlledFromProps = true;
  } else if (newProps[defaultValueProp] != null) {
    newIsControlledFromProps = false;
  }
  // else, indeterminate (handled as uncontrolled)
  // Warn if switching between uncontrolled and controlled.
  // (One difference between this implementation and React's <input> is that oldIsControlled is
  // indeterminate and newIsControlled is true, we don't warn.)
  if (oldIsControlled !== undefined && !!newIsControlledFromProps !== !!oldIsControlled) {
    warnControlledUncontrolledSwitch(componentId, componentName, !!oldIsControlled);
  }
  // If the component has ever been controlled, it's always considered controlled from that point on.
  const newIsControlled = oldIsControlled || newIsControlledFromProps;
  // Use the old value from state unless it's been updated in a valid way.
  let newValue = currentValue;
  if (newIsControlled && newProps[valueProp] != null) {
    // If the component is controlled and a valid value is given, use it.
    newValue = (newProps[valueProp] as any) as TValue;
  } else if (!newIsControlled && isConstructor) {
    // If the component is uncontrolled and this is the constructor, use the default value.
    // (defaultValue is ignored after the component is first constructed)
    newValue = (newProps[defaultValueProp] as any) as TValue;
  }
  // If value is null/undefined, it's up to the caller to figure out the appropriate default.
  return {
    value: newValue,
    isControlled: newIsControlled
  };
  // tslint:enable:triple-equals
}

const warningsMap: {
  valueOnChange: { [id: string]: boolean };
  valueDefaultValue: { [id: string]: boolean };
  controlledToUncontrolled: { [id: string]: boolean };
  uncontrolledToControlled: { [id: string]: boolean };
} = {
  valueOnChange: {},
  valueDefaultValue: {},
  controlledToUncontrolled: {},
  uncontrolledToControlled: {}
};
/**
 * Check for and warn on the following error conditions with a form component:
 * - A value prop is provided (indicated it's being used as controlled) without a change handler
 * - Both the value and defaultValue props are provided
 *
 * The messages mimic the warnings React gives for these error conditions on input elements.
 * The warning will only be displayed once per component ID.
 *
 * @param componentId - The ID of the form component. Used to prevent showing warnings repeatedly.
 * @param componentName - The name of the form component.
 * @param props - The props to evaluate.
 * @param valueProp - The name of the prop for the controlled value.
 * @param defaultValueProp - The name of the prop for the uncontrolled default value.
 * @param onChangeProp - The name of the change handler prop.
 * @param addlOnChangeProp - The name of an additional change handler prop (e.g. the deprecated
 * `onChanged` prop in some components).
 * @param readOnlyProp - The name of the prop for setting the component to be read-only.
 */
export function warnControlledUsage<P>(
  componentId: string,
  componentName: string,
  props: P,
  valueProp: keyof P,
  defaultValueProp: keyof P,
  onChangeProp: keyof P,
  addlOnChangeProp?: keyof P,
  readOnlyProp?: keyof P
): void {
  const hasOnChange = !!(props[onChangeProp] || (addlOnChangeProp && props[addlOnChangeProp]));
  const isReadOnly = !!(readOnlyProp && props[readOnlyProp]);
  // != null is the same check used internally by React's <input>
  // https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMInput.js
  const hasValue = props[valueProp] != null; // tslint:disable-line:triple-equals
  const hasDefaultValue = props[defaultValueProp] != null; // tslint:disable-line:triple-equals
  if (hasValue && !(hasOnChange || isReadOnly) && !warningsMap.valueOnChange[componentId]) {
    warningsMap.valueOnChange[componentId] = true;
    warn(
      `Warning: You provided a '${valueProp}' prop to a ${componentName} without an '${onChangeProp}' handler. ` +
        `This will render a read-only field. If the field should be mutable use '${defaultValueProp}'. ` +
        `Otherwise, set '${onChangeProp}'${readOnlyProp ? ` or '${readOnlyProp}'` : ''}.`
    );
  }
  if (hasValue && hasDefaultValue && !warningsMap.valueDefaultValue[componentId]) {
    warningsMap.valueDefaultValue[componentId] = true;
    warn(
      `Warning: You provided both '${valueProp}' and '${defaultValueProp}' to a ${componentName}. ` +
        `Form fields must be either controlled or uncontrolled (specify either the '${valueProp}' prop, ` +
        `or the '${defaultValueProp}' prop, but not both). Decide between using a controlled or uncontrolled ` +
        `${componentName} and remove one of these props. More info: https://fb.me/react-controlled-components`
    );
  }
}
/**
 * Warn if a form component is switching between controlled and uncontrolled usage.
 * The message mimics the warning React gives for this error condition on input elements.
 * The warning will only be displayed once per component ID.
 *
 * @param componentId - The ID of the form component. Used to prevent showing warnings repeatedly.
 * @param componentName - The name of the form component.
 * @param wasControlled - true if the component was originally controlled, false if it was
 * uncontrolled. Used to determine the error message variant displayed.
 */
export function warnControlledUncontrolledSwitch(componentId: string, componentName: string, wasControlled: boolean): void {
  const oldType = wasControlled ? 'a controlled' : 'an uncontrolled';
  const newType = wasControlled ? 'uncontrolled' : 'controlled';
  const warnMap = wasControlled ? warningsMap.controlledToUncontrolled : warningsMap.uncontrolledToControlled;
  if (!warnMap[componentId]) {
    warnMap[componentId] = true;
    warn(
      `Warning: A component is changing ${oldType} ${componentName} to be ${newType}. ` +
        `${componentName}s should not switch from controlled to uncontrolled (or vice versa). ` +
        `Decide between using controlled or uncontrolled for the lifetime of the component. ` +
        `More info: https://fb.me/react-controlled-components`
    );
  }
}
