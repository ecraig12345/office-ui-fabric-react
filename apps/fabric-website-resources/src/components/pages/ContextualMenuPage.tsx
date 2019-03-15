import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { ContextualMenuPageProps } from 'office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.doc';

export const ContextualMenuPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/ContextualMenu.page.json')}
    {...{ ...ContextualMenuPageProps, ...props }}
  />
);
