import * as React from 'react';
import { ActivityItemPageProps } from 'office-ui-fabric-react/lib/components/ActivityItem/ActivityItem.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

export const ActivityItemPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ActivityItemPageProps, ...props }} />;
