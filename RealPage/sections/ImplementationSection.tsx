import * as React from 'react';
import { PropertiesTableSet } from '@uifabric/example-app-base';
import { MessageBar, css } from 'office-ui-fabric-react';
import { camelize, pascalize } from '@uifabric/example-app-base/lib/utilities/index';
import { IPageSectionProps } from '../Page.types';
import * as styles from './ImplementationSection.module.scss';

export interface IImplementationSectionProps extends IPageSectionProps {
  propertiesTablesSources: string[];
  allowNativeProps?: boolean;
  nativePropsElement?: string | string[];
  allowNativePropsForComponentName?: string;
}

export const ImplementationSection: React.StatelessComponent<IImplementationSectionProps> = props => {
  if (props.propertiesTablesSources) {
    const { className, sectionName = 'Implementation', readableSectionName = sectionName, style, propertiesTablesSources } = props;
    const sectionClassName = camelize(sectionName);
    const sectionId = pascalize(sectionName);
    return (
      <div className={css(`Page-${sectionClassName}Section`, className)} style={style}>
        <div className={css(styles.sectionHeader, `Page-${sectionClassName}SectionHeader`)}>
          <h2 className={css(styles.subHeading, `Page-subHeading`)} id={sectionId}>
            {readableSectionName}
          </h2>
        </div>
        {_getNativePropsInfo(props)}
        <PropertiesTableSet sources={propertiesTablesSources} />
      </div>
    );
  }
  return null;
};

function _getNativePropsInfo(props: IImplementationSectionProps): JSX.Element | undefined {
  const { allowNativeProps, allowNativePropsForComponentName, nativePropsElement = 'div' } = props;
  if (allowNativeProps) {
    const nativePropsElems = Array.isArray(nativePropsElement) ? nativePropsElement : [nativePropsElement];

    const elementsArr: (JSX.Element | string)[] = [];
    for (const elem of nativePropsElems) {
      elementsArr.push(<code key={elem}>{`<${elem}>`}</code>);
      elementsArr.push(' and ');
    }
    elementsArr.pop(); // remove last ' and '
    elementsArr.push(` tag${nativePropsElems.length > 1 ? 's' : ''}`);

    let componentNameJsx: JSX.Element | undefined;
    if (allowNativePropsForComponentName) {
      componentNameJsx = <code>{allowNativePropsForComponentName}</code>;
    }

    return (
      <MessageBar>
        <strong>Native props allowed {componentNameJsx && <>for {componentNameJsx}</>}</strong> - all HTML attributes native to the{' '}
        {elementsArr}, including all aria and custom data attributes, can be applied as native props on{' '}
        {componentNameJsx || 'this component'}.
      </MessageBar>
    );
  }
}
