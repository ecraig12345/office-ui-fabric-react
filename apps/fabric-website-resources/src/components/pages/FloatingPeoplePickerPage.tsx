import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { FloatingPeoplePickerPageProps } from 'office-ui-fabric-react/lib/components/FloatingPicker/PeoplePicker/FloatingPeoplePicker.doc';

export const FloatingPeoplePickerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...FloatingPeoplePickerPageProps, ...props }} />;
