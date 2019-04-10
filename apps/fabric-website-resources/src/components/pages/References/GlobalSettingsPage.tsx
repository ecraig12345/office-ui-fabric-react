import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const GlobalSettingsPage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/GlobalSettings.page.json')} />
);
