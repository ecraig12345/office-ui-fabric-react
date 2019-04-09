import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IChangeEventCallbackPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/IChangeEventCallback.page.json')} />
);
