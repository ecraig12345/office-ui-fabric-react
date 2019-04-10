import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const FirstWeekOfYearPage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/FirstWeekOfYear.page.json')} />
);
