import * as React from 'react';

import { DemoPage } from '../DemoPage';

import { ExtendedPeoplePickerPageProps } from 'office-ui-fabric-react/lib/components/ExtendedPicker/PeoplePicker/ExtendedPeoplePicker.doc';

export const ExtendedPeoplePickerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/ExtendedPeoplePicker.page.json')}
    {...{ ...ExtendedPeoplePickerPageProps, ...props }}
  />
);
