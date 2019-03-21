import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const PeoplePickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/PeoplePicker.page.json')} />
);
