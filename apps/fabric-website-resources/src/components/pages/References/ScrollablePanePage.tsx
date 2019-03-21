import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ScrollablePanePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ScrollablePane.page.json')} />
);
