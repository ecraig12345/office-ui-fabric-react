import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { GroupedListPageProps } from 'office-ui-fabric-react/lib/components/GroupedList/GroupedList.doc';

export const GroupedListPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...GroupedListPageProps, ...props }} />
);
