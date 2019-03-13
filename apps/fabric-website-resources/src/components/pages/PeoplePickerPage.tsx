import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { PeoplePickerPageProps } from 'office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePicker.doc';

export const PeoplePickerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...PeoplePickerPageProps, ...props }} />
);
