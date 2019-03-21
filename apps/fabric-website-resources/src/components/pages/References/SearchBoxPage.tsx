import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SearchBoxPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/SearchBox.page.json')} />
);
