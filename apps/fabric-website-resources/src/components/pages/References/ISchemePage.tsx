import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ISchemePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('@uifabric/page-json-generator/lib/pages/references/IScheme.page.json')} />
);
