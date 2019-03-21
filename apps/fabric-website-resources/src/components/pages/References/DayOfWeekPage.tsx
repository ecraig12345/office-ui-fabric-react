import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DayOfWeekPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/DayOfWeek.page.json')} />
);
