import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { GroupedListPageProps } from 'office-ui-fabric-react/lib/components/GroupedList/GroupedList.doc';

export const GroupedListPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/GroupedList.page.json')}
    {...{ ...GroupedListPageProps, ...props }}
  />
);
