import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ISizePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('@uifabric/page-json-generator/lib/pages/references/ISize.page.json')} />
);
