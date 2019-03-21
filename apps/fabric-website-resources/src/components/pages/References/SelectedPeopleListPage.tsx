import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SelectedPeopleListPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/SelectedPeopleList.page.json')} />
);
