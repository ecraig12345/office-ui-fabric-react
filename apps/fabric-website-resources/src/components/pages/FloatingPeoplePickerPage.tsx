import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { FloatingPeoplePickerPageProps } from 'office-ui-fabric-react/lib/components/FloatingPicker/PeoplePicker/FloatingPeoplePicker.doc';

export const FloatingPeoplePickerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...FloatingPeoplePickerPageProps, ...props }} />
);
