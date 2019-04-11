import * as React from 'react';
import { ComponentPage, ExampleCard } from '@uifabric/example-app-base';
import { DetailsListNavigatingFocusExample } from 'office-ui-fabric-react/lib/components/DetailsList/examples/DetailsList.NavigatingFocus.Example';
import { componentPageStyles } from '../../Page.styles';
const DetailsListNavigatingFocusExampleCode = require('raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.NavigatingFocus.Example.tsx') as string;

export const DetailsListNavigatingFocusComponentPage: React.StatelessComponent = () => {
  return (
    <ComponentPage
      title="Inner Navigation DetailsList"
      componentName="DetailsListNavigatingFocusExample"
      componentUrl="https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/DetailsList"
      styles={componentPageStyles}
      exampleCards={
        <ExampleCard
          title="Navigating to new content preserving keyboard focus with initialFocusedIndex"
          isOptIn={true}
          code={DetailsListNavigatingFocusExampleCode}
        >
          <DetailsListNavigatingFocusExample />
        </ExampleCard>
      }
      isHeaderVisible={false}
    />
  );
};
