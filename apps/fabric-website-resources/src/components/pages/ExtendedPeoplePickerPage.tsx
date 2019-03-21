import * as React from 'react';

import { DemoPage } from '../DemoPage';

// import { ExtendedPeoplePickerPageProps } from 'office-ui-fabric-react/lib/components/ExtendedPicker/PeoplePicker/ExtendedPeoplePicker.doc';
import { DropdownPageProps } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown.doc';

export const ExtendedPeoplePickerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/ExtendedPeoplePicker.page.json')}
    {...{ ...DropdownPageProps, ...props }}
  />
);
