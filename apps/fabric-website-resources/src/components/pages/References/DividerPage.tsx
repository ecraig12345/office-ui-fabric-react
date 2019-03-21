import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DividerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Divider.page.json')} />
);
