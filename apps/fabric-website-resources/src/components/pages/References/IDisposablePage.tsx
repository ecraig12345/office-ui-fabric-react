import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IDisposablePage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/IDisposable.page.json')} />
);
