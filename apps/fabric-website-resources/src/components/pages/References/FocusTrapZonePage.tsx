import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const FocusTrapZonePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/FocusTrapZone.page.json')} />
);
