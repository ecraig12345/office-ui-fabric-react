import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ISizePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/ISize.page.json')} />
);
