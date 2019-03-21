import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ListPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/List.page.json')} />
);
