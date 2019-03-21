import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ExtendedPeoplePickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ExtendedPeoplePicker.page.json')} />
);
