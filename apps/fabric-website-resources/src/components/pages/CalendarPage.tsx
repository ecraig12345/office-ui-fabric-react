import * as React from 'react';
import { CalendarPageProps } from 'office-ui-fabric-react/lib/components/Calendar/Calendar.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

export const CalendarPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...CalendarPageProps, ...props }} />;
