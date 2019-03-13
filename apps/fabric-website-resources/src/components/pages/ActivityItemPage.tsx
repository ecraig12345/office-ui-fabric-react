import * as React from 'react';
import { ActivityItemPageProps } from 'office-ui-fabric-react/lib/components/ActivityItem/ActivityItem.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

export const ActivityItemPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ActivityItemPageProps, ...props }} />
);
