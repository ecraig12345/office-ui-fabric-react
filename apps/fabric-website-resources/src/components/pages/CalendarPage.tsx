import * as React from 'react';
import { CalendarPageProps } from 'office-ui-fabric-react/lib/components/Calendar/Calendar.doc';
import { DemoPage } from '../DemoPage';

export const CalendarPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Calendar.page.json')}
    {...{ ...CalendarPageProps, ...props }}
  />
);
