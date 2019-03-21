import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SelectedItemsListPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/SelectedItemsList.page.json')} />
);
