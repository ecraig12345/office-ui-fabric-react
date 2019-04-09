import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { PivotPageProps } from 'office-ui-fabric-react/lib/components/Pivot/Pivot.doc';

export const PivotPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/page-json-generator/lib/pages/office-ui-fabric-react/Pivot.page.json')}
    {...{ ...PivotPageProps, ...props }}
  />
);
