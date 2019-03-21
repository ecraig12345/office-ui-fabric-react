import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DetailsListPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/DetailsList.page.json')} />
);
