import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { DatePickerPageProps } from 'office-ui-fabric-react/lib/components/DatePicker/DatePicker.doc';

export const DatePickerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DatePickerPageProps, ...props }} />;
