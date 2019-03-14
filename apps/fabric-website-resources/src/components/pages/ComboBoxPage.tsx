import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { ComboBoxPageProps } from 'office-ui-fabric-react/lib/components/ComboBox/ComboBox.doc';

export const ComboBoxPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/ComboBox.page.json')}
    {...{ ...ComboBoxPageProps, ...props }}
  />
);
