import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { ModalPageProps } from 'office-ui-fabric-react/lib/components/Modal/Modal.doc';

export const ModalPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/page-json-generator/lib/pages/office-ui-fabric-react/Modal.page.json')}
    {...{ ...ModalPageProps, ...props }}
  />
);
