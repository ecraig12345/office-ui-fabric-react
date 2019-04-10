import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ISemanticColorsPage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/ISemanticColors.page.json')} />
);
