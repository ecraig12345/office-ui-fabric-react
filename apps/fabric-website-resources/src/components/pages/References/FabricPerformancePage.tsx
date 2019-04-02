import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const FabricPerformancePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/FabricPerformance.page.json')} />
);
