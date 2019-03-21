import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const CalendarPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Calendar.page.json')} />
);
