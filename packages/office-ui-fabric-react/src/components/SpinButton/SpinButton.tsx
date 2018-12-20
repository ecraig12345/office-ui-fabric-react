import * as React from 'react';
import { IconButton } from '../../Button';
import { Label } from '../../Label';
import { Icon } from '../../Icon';
import { BaseComponent, getId, KeyCodes, customizable, calculatePrecision, precisionRound, createRef } from '../../Utilities';
import { ISpinButton, ISpinButtonProps } from './SpinButton.types';
import { Position } from '../../utilities/positioning';
import { getStyles, getArrowButtonStyles } from './SpinButton.styles';
import { getClassNames } from './SpinButton.classNames';
import { KeytipData } from '../../KeytipData';
import { getValueAndIsControlled, warnControlledUsage } from '../../utilities/forms';

export enum KeyboardSpinDirection {
  down = -1,
  notSpinning = 0,
  up = 1
}

export interface ISpinButtonState {
  /**
   * Is true when the control has focus.
   */
  isFocused: boolean;

  /**
   * The value of the spin button.
   */
  value: string;

  /**
   * keyboard spin direction, used to style the up or down button
   * as active when up/down arrow is pressed
   */
  keyboardSpinDirection: KeyboardSpinDirection;

  /**
   * The calculated precision for the value.
   * @deprecated Does not belong in state and will be moved to private member in v7.
   */
  precision: number;

  /**
   * If the user is currently typing in the text box or spinning (using keyboard or mouse),
   * this tracks the value entered. The value will be "committed" and onChange called after blur
   * if typing, or when spinning stops. (If typing, the value will also be validated on blur
   * to ensure that it's in range.)
   */
  lastEnteredValue?: string;
}

const INITIAL_STEP_DELAY = 400;
const STEP_DELAY = 75;

@customizable('SpinButton', ['theme', 'styles'], true)
export class SpinButton extends BaseComponent<ISpinButtonProps, ISpinButtonState> implements ISpinButton {
  public static defaultProps: ISpinButtonProps = {
    step: 1,
    min: 0,
    max: 100,
    disabled: false,
    labelPosition: Position.start,
    label: '',
    incrementButtonIcon: { iconName: 'ChevronUpSmall' },
    decrementButtonIcon: { iconName: 'ChevronDownSmall' }
  };

  private _input = createRef<HTMLInputElement>();
  private _inputId: string;
  private _labelId: string;
  // private _lastValidValue: string;
  private _spinningByMouse: boolean;
  private _valueToValidate: string | undefined; // To avoid duplicate validations/submissions

  private _currentStepFunctionHandle: number;

  constructor(props: ISpinButtonProps) {
    super(props);

    this._warnMutuallyExclusive({
      value: 'defaultValue'
    });

    this._currentStepFunctionHandle = -1;
    this._labelId = getId('SpinButton-label');
    this._inputId = getId('SpinButton-input');
    this._spinningByMouse = false;

    // this._lastValidValue = value;

    this.state = {
      isFocused: false,
      value: _getValue(props, undefined),
      keyboardSpinDirection: KeyboardSpinDirection.notSpinning,
      precision: _getPrecision(props)
    };
  }

  /**
   * Invoked when a component is receiving new props. This method is not called for the initial render.
   */
  public componentWillReceiveProps(newProps: ISpinButtonProps): void {
    // this._lastValidValue = this.value!;
    const value = _getValue(newProps, this.value);
    const precision = _getPrecision(newProps);

    if (value !== this.value || precision !== this.state.precision) {
      this.setState({ value, precision, lastEnteredValue: undefined });
    }
  }

  public render(): JSX.Element {
    const {
      disabled,
      label,
      min,
      max,
      labelPosition,
      iconProps,
      incrementButtonIcon,
      incrementButtonAriaLabel,
      decrementButtonIcon,
      decrementButtonAriaLabel,
      title,
      ariaLabel,
      styles: customStyles,
      upArrowButtonStyles: customUpArrowButtonStyles,
      downArrowButtonStyles: customDownArrowButtonStyles,
      theme,
      ariaPositionInSet,
      ariaSetSize,
      ariaValueNow,
      ariaValueText,
      keytipProps,
      className
    } = this.props;

    const { isFocused, lastEnteredValue = this.value, keyboardSpinDirection } = this.state;
    const valueNumber = Number(lastEnteredValue);

    const classNames = this.props.getClassNames
      ? this.props.getClassNames(theme!, !!disabled, !!isFocused, keyboardSpinDirection, labelPosition, className)
      : getClassNames(getStyles(theme!, customStyles), !!disabled, !!isFocused, keyboardSpinDirection, labelPosition, className);

    return (
      <div className={classNames.root}>
        {labelPosition !== Position.bottom && (
          <div className={classNames.labelWrapper}>
            {iconProps && <Icon {...iconProps} className={classNames.icon} aria-hidden="true" />}
            {label && (
              <Label id={this._labelId} htmlFor={this._inputId} className={classNames.label}>
                {label}
              </Label>
            )}
          </div>
        )}
        <KeytipData keytipProps={keytipProps} disabled={disabled}>
          {(keytipAttributes: any): JSX.Element => (
            <div
              className={classNames.spinButtonWrapper}
              title={title && title}
              aria-label={ariaLabel && ariaLabel}
              aria-posinset={ariaPositionInSet}
              aria-setsize={ariaSetSize}
              data-ktp-target={keytipAttributes['data-ktp-target']}
            >
              <input
                value={lastEnteredValue}
                id={this._inputId}
                onChange={this._onInputChange}
                onInput={this._onInputChange}
                className={classNames.input}
                type="text"
                autoComplete="off"
                role="spinbutton"
                aria-labelledby={label && this._labelId}
                aria-valuenow={!isNaN(Number(ariaValueNow)) ? ariaValueNow : !isNaN(valueNumber) ? valueNumber : undefined}
                aria-valuetext={ariaValueText || (isNaN(valueNumber) ? lastEnteredValue : undefined)}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-describedby={keytipAttributes['aria-describedby']}
                onBlur={this._onBlur}
                ref={this._input}
                onFocus={this._onFocus}
                onKeyDown={this._handleKeyDown}
                onKeyUp={this._handleKeyUp}
                readOnly={disabled}
                aria-disabled={disabled}
                data-lpignore={true}
                data-ktp-execute-target={keytipAttributes['data-ktp-execute-target']}
              />
              <span className={classNames.arrowBox}>
                <IconButton
                  styles={getArrowButtonStyles(theme!, true, customUpArrowButtonStyles)}
                  className={'ms-UpButton'}
                  checked={keyboardSpinDirection === KeyboardSpinDirection.up}
                  disabled={disabled}
                  iconProps={incrementButtonIcon}
                  onMouseDown={this._onIncrementMouseDown}
                  onMouseLeave={this._stop}
                  onMouseUp={this._stop}
                  tabIndex={-1}
                  ariaLabel={incrementButtonAriaLabel}
                  data-is-focusable={false}
                />
                <IconButton
                  styles={getArrowButtonStyles(theme!, false, customDownArrowButtonStyles)}
                  className={'ms-DownButton'}
                  checked={keyboardSpinDirection === KeyboardSpinDirection.down}
                  disabled={disabled}
                  iconProps={decrementButtonIcon}
                  onMouseDown={this._onDecrementMouseDown}
                  onMouseLeave={this._stop}
                  onMouseUp={this._stop}
                  tabIndex={-1}
                  ariaLabel={decrementButtonAriaLabel}
                  data-is-focusable={false}
                />
              </span>
            </div>
          )}
        </KeytipData>
        {labelPosition === Position.bottom && (
          <div className={classNames.labelWrapper}>
            {iconProps && <Icon iconName={iconProps.iconName} className={classNames.icon} aria-hidden="true" />}
            {label && (
              <Label id={this._labelId} htmlFor={this._inputId} className={classNames.label}>
                {label}
              </Label>
            )}
          </div>
        )}
      </div>
    );
  }

  public get value(): string | undefined {
    return this.state && this.state.value;
  }

  public focus(): void {
    if (this._input.current) {
      this._input.current.focus();
    }
  }

  private _onFocus = (ev: React.FocusEvent<HTMLInputElement>): void => {
    // TODO

    // We can't set focus on a non-existing element
    if (!this._input.current) {
      return;
    }

    if (this._spinningByMouse || this.state.keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
      this._stop(ev);
    }

    this._input.current.select();

    // this._stop(ev);

    // this._input.current!.select();

    this.setState({ isFocused: true });

    if (this.props.onFocus) {
      this.props.onFocus(ev);
    }
  };

  private _onBlur = (ev: React.FocusEvent<HTMLInputElement>): void => {
    // TODO

    this._validate(ev);
    this.setState({ isFocused: false });

    // // Validate the value, fire the change callback, and set non-focused state
    // // (we pass the non-focused state update to onChange to do atomically with other state updates)
    // let value = this.value!;
    // if (typeof this.state.lastEnteredValue === 'string') {
    //   value = this._validateValue(this.state.lastEnteredValue);
    // }
    // this._commitChange(ev, value, { isFocused: false });

    if (this.props.onBlur) {
      this.props.onBlur(ev);
    }
  };

  private _onValidate = (value: string, event: React.SyntheticEvent<HTMLElement>): string | void => {
    if (this.props.onValidate) {
      return this.props.onValidate(value, event, this._defaultOnValidate);
    } else {
      return this._defaultOnValidate(value);
    }
    // if (value === null || value.trim().length === 0 || isNaN(Number(value))) {
    //   return this._lastValidValue;
    // }
    // const newValue = Math.min(this.props.max!, Math.max(this.props.min!, Number(value)));
    // return String(newValue);
  };

  /**
   * Validate function to use if one is not passed in
   */
  private _defaultOnValidate = (value: string) => {
    // TODO
    if (value === null || value.trim().length === 0 || isNaN(Number(value))) {
      return this.state.value;
      // return this._lastValidValue;
    }
    const newValue = Math.min(this.props.max!, Math.max(this.props.min!, Number(value)));
    return String(newValue);
  };

  private _onIncrement = (value: string): string | void => {
    if (this.props.onIncrement) {
      return this.props.onIncrement(value, this._defaultOnIncrement);
    } else {
      return this._defaultOnIncrement(value);
    }
  };

  /**
   * Increment function to use if one is not passed in
   */
  private _defaultOnIncrement = (value: string): string | void => {
    let newValue: number = Math.min(Number(value) + Number(this.props.step), this.props.max!);
    newValue = precisionRound(newValue, this.state.precision);
    return String(newValue);
  };

  private _onDecrement = (value: string): string | void => {
    if (this.props.onDecrement) {
      return this.props.onDecrement(value, this._defaultOnDecrement);
    } else {
      return this._defaultOnDecrement(value);
    }
  };

  /**
   * Decrement function to use if one is not passed in
   */
  private _defaultOnDecrement = (value: string): string | void => {
    let newValue: number = Math.max(Number(value) - Number(this.props.step), this.props.min!);
    newValue = precisionRound(newValue, this.state.precision);
    return String(newValue);
  };

  /**
   * This is used when validating text entry
   * in the input (not when changed via the buttons)
   * @param event - the event that fired
   */
  private _validate = (event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void => {
    // TODO

    if (this.value !== undefined && this._valueToValidate !== undefined && this._valueToValidate !== this._lastValidValue) {
      const newValue = this._onValidate(this._valueToValidate, event);
      if (newValue) {
        // this._lastValidValue = newValue;
        this._valueToValidate = undefined;
        this.setState({ value: newValue });
      }
    }

    // const { max, min } = props || this.props;
    // const oldValue = this.value;
    // if (typeof value === 'string') {
    //   value = value.trim();
    // }
    // // If value is invalid, default to the old value (if it exists) or the min
    // // (Number('') and Number(null) return 0 not NaN, hence the separate checks)
    // if (value === '' || value === null || isNaN(Number(value))) {
    //   value = oldValue === undefined ? String(min) : oldValue;
    // }
    // // Ensure the value falls within a valid range
    // return String(Math.max(min!, Math.min(max!, Number(value))));
  };

  /**
   * The method is needed to ensure we are updating the actual input value.
   * without this our value will never change (and validation will not have the correct number)
   */
  private _onInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    // TODO: don't update if value is same as current
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = element.value;
    this._valueToValidate = value;
    this.setState({
      value: value
    });
    // // We don't validate or call onChange every time the user types a character, only on blur
    // // (this is different than TextField). But we do need to update lastEnteredValue so that the
    // // UI will reflect the intermediate value that the user is still typing.
    // // (not sure how this could be called if the text field isn't focused, but check for that just in case,)
    // const element = event.target as HTMLInputElement;
    // const value = element && element.value;
    // if (this.state.isFocused && value !== undefined && value !== this.value && value !== this.state.lastEnteredValue) {
    //   this.setState({ lastEnteredValue: value });
    // }
  };

  /**
   * Update the value with the given stepFunction
   * @param ev - Event which triggered the update
   * @param shouldSpin - should we fire off another updateValue when we are done here? This should be true
   * when spinning in response to a mouseDown
   * @param stepFunction - function to use to step by
   * @param stepDelay - Delay before firing the next step (if spinning)
   */
  private _updateValue = (
    ev: React.SyntheticEvent<HTMLElement>,
    shouldSpin: boolean,
    stepFunction: (value: string) => string | void,
    stepDelay: number = INITIAL_STEP_DELAY
  ): void => {
    // TODO

    const newValue: string | void = stepFunction(this.state.value);
    if (newValue) {
      this._lastValidValue = newValue;
      this.setState({ value: newValue });
    }

    if (this._spinningByMouse !== shouldSpin) {
      this._spinningByMouse = shouldSpin;
    }

    if (shouldSpin) {
      this._currentStepFunctionHandle = this._async.setTimeout(() => {
        this._updateValue(ev, shouldSpin, stepFunction, STEP_DELAY);
      }, stepDelay);
    }
    // this._spinningByMouse = shouldSpin;

    // const state = this.state;
    // const { lastEnteredValue = this.value! } = state;
    // const newValue = stepFunction(lastEnteredValue);

    // if (shouldSpin) {
    //   // If spinning, set newValue as an intermediate value and don't validate/commit yet
    //   this.setState({ lastEnteredValue: newValue });

    //   this._currentStepFunctionHandle = this._async.setTimeout(() => {
    //     this._updateValue(ev, shouldSpin, stepFunction, STEP_DELAY);
    //   }, stepDelay);
    // } else if (newValue !== undefined) {
    //   // This is a one-off update, so validate and commit it
    //   this._commitChange(ev, this._validateValue(newValue));
    // }
  };

  /**
   * Stop spinning: clear any currently pending update, set spinning to false, and commit value
   */
  private _stop = (ev: React.SyntheticEvent<any>): void => {
    if (this._currentStepFunctionHandle >= 0) {
      this._async.clearTimeout(this._currentStepFunctionHandle);
      this._currentStepFunctionHandle = -1;
    }

    if (this._spinningByMouse || this.state.keyboardSpinDirection !== KeyboardSpinDirection.notSpinning) {
      this._spinningByMouse = false;
      // TODO
      this.setState({ keyboardSpinDirection: KeyboardSpinDirection.notSpinning });
      // const { lastEnteredValue = this.value! } = this.state;
      // this._commitChange(ev, lastEnteredValue);
    }
  };

  /**
   * Handle keydown on the text field. We need to update the value when up/down arrows are pressed.
   */
  private _handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    // eat the up and down arrow keys to keep focus in the spinButton
    // (especially when a spinButton is inside of a FocusZone)
    if (event.which === KeyCodes.up || event.which === KeyCodes.down || event.which === KeyCodes.enter) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.props.disabled) {
      this._stop(event);
      return;
    }

    let spinDirection = KeyboardSpinDirection.notSpinning;

    switch (event.which) {
      case KeyCodes.up:
        spinDirection = KeyboardSpinDirection.up;
        this._updateValue(event, false /* shouldSpin */, this._onIncrement);
        break;
      case KeyCodes.down:
        spinDirection = KeyboardSpinDirection.down;
        this._updateValue(event, false /* shouldSpin */, this._onDecrement);
        break;
      case KeyCodes.enter:
        this._validate(event);
        break;
      case KeyCodes.escape:
        // Revert to the previously committed value
        // TODO
        if (this.state.value !== this._lastValidValue) {
          this.setState({ value: this._lastValidValue });
        }
        // this.setState({
        //   lastEnteredValue: undefined
        // });
        break;
    }

    // style the increment/decrement button to look active
    // when the corresponding up/down arrow keys trigger a step
    if (this.state.keyboardSpinDirection !== spinDirection) {
      this.setState({ keyboardSpinDirection: spinDirection });
    }
  };

  /**
   * Make sure that we have stopped spinning on keyUp if the up or down arrow fired this event
   */
  private _handleKeyUp = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (this.props.disabled || event.which === KeyCodes.up || event.which === KeyCodes.down) {
      event.stopPropagation();
      event.preventDefault();
      this._stop(event);
    }
  };

  private _onIncrementMouseDown = (ev: React.MouseEvent<HTMLElement>): void => {
    this._updateValue(ev, true /* shouldSpin */, this._onIncrement);
  };

  private _onDecrementMouseDown = (ev: React.MouseEvent<HTMLElement>): void => {
    this._updateValue(ev, true /* shouldSpin */, this._onDecrement);
  };
}

function _getValue(newProps: ISpinButtonProps, oldValue: string | undefined): string {
  if (typeof newProps.value === 'string') {
    return newProps.value;
  } else if (oldValue !== undefined) {
    return oldValue;
  } else if (typeof newProps.defaultValue === 'string') {
    return newProps.defaultValue;
  }
  return String(newProps.min);
}

function _getPrecision(newProps: ISpinButtonProps): number {
  let precision = newProps.precision;
  if (typeof precision !== 'number') {
    // Ensure that the autocalculated precision is not negative.
    precision = Math.max(calculatePrecision(newProps.step!), 0);
  }
  return precision!;
}
