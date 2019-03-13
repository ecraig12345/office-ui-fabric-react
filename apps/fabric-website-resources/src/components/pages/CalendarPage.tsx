import * as React from 'react';
import { CalendarPageProps } from 'office-ui-fabric-react/lib/components/Calendar/Calendar.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

export const CalendarPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...CalendarPageProps, ...props }} />
);
