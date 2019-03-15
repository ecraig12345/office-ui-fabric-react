import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { CommandBarPageProps } from 'office-ui-fabric-react/lib/components/CommandBar/CommandBar.doc';

export const CommandBarPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/CommandBar.page.json')}
    {...{ ...CommandBarPageProps, ...props }}
  />
);
