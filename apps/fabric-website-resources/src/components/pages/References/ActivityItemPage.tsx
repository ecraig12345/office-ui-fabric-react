import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ActivityItemPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ActivityItem.page.json')} />
);
