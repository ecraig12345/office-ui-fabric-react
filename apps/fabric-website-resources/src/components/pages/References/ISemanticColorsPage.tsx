import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ISemanticColorsPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/ISemanticColors.page.json')} />
);
