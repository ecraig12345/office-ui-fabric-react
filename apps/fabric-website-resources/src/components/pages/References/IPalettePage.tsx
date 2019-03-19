import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IPalettePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/IPalette.page.json')} />
);
