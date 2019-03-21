import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const StackPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Stack.page.json')} />
);
