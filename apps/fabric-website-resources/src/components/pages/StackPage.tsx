import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { StackPageProps } from 'office-ui-fabric-react/lib/components/Stack/Stack.doc';

export const StackPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/page-json-generator/lib/pages/office-ui-fabric-react/Stack.page.json')}
    {...{ ...StackPageProps, ...props }}
  />
);
