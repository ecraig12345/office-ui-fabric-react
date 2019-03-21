import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const PickersPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Pickers.page.json')} />
);
