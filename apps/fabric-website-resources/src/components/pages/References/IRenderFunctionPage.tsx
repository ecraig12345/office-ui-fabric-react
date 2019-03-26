import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IRenderFunctionPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IRenderFunction.page.json')} />
);
