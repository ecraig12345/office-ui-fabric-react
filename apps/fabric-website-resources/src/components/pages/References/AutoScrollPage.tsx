import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const AutoScrollPage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/AutoScroll.page.json')} />
);
