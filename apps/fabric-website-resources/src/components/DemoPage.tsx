import { IDemoPageProps } from './DemoPage.types';
import * as React from 'react';
import { ComponentPage2 } from './Page';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';

export const DemoPage: React.StatelessComponent<IDemoPageProps> = demoPageProps => {
  const {
    implementationExamples,
    // This is unused but has to be pulled out because ComponentPage has a prop with the same name and different type
    componentStatus,
    // Passing the extra props to ComponentPage like this helps to keep the prop names in sync
    ...componentPageProps
  } = demoPageProps;
  return (
    <Customizer {...FluentCustomizations}>
      <ComponentPage2 {...componentPageProps} />
    </Customizer>
  );
};
