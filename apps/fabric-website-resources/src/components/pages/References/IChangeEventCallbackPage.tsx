import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IChangeEventCallbackPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IChangeEventCallback.page.json')} />
);
