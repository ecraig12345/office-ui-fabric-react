import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const FloatingPeoplePickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/FloatingPeoplePicker.page.json')} />
);
