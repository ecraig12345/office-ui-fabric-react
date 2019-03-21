import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ShimmerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Shimmer.page.json')} />
);
