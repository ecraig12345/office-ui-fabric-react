import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const FirstWeekOfYearPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/FirstWeekOfYear.page.json')} />
);
