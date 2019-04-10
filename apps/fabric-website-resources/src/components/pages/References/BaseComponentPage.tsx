import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const BaseComponentPage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/BaseComponent.page.json')} />
);
