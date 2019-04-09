import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { CheckboxPageProps } from 'office-ui-fabric-react/lib/components/Checkbox/Checkbox.doc';

export const CheckboxPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/page-json-generator/lib/pages/office-ui-fabric-react/Checkbox.page.json')}
    {...{ ...CheckboxPageProps, ...props }}
  />
);
