import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DateRangeTypePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/DateRangeType.page.json')} />
);
