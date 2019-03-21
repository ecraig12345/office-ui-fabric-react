import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const PivotPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Pivot.page.json')} />
);
