import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { ExtendedPeoplePickerPageProps } from 'office-ui-fabric-react/lib/components/ExtendedPicker/PeoplePicker/ExtendedPeoplePicker.doc';

export const ExtendedPeoplePickerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ExtendedPeoplePickerPageProps, ...props }} />;
