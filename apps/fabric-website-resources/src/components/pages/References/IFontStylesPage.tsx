import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IFontStylesPage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/IFontStyles.page.json')} />
);
