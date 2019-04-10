import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IBasePropsPage = () => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/IBaseProps.page.json')} />
);
