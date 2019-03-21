import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const TogglePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Toggle.page.json')} />
);
