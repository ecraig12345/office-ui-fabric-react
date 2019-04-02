import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const AutoScrollPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/AutoScroll.page.json')} />
);
