import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { DialogPageProps } from 'office-ui-fabric-react/lib/components/Dialog/Dialog.doc';

export const DialogPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Dialog.page.json')}
    {...{ ...DialogPageProps, ...props }}
  />
);
