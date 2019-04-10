import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { PeoplePickerPageProps } from 'office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePicker.doc';

export const PeoplePickerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...PeoplePickerPageProps, ...props }} />;
