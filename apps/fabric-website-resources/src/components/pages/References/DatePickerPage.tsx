import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DatePickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/DatePicker.page.json')} />
);
