import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { DatePickerPageProps } from 'office-ui-fabric-react/lib/components/DatePicker/DatePicker.doc';

export const DatePickerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DatePickerPageProps, ...props }} />
);
