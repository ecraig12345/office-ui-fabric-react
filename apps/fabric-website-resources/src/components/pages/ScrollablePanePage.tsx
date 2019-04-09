import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { ScrollablePanePageProps } from 'office-ui-fabric-react/lib/components/ScrollablePane/ScrollablePane.doc';

export const ScrollablePanePage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/page-json-generator/lib/pages/office-ui-fabric-react/ScrollablePane.page.json')}
    {...{ ...ScrollablePanePageProps, ...props }}
  />
);
