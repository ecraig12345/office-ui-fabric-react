import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const GroupedListPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/GroupedList.page.json')} />
);
