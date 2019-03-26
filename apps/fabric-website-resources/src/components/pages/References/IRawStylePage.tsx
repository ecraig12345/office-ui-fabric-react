import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IRawStylePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IRawStyle.page.json')} />
);
