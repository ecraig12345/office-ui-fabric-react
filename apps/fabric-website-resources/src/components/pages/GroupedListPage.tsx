import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { GroupedListPageProps } from 'office-ui-fabric-react/lib/components/GroupedList/GroupedList.doc';

export const GroupedListPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...GroupedListPageProps, ...props }} />;
