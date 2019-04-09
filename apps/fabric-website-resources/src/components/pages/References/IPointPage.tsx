import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IPointPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('@uifabric/page-json-generator/lib/pages/references/IPoint.page.json')} />
);
