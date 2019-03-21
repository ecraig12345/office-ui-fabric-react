import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const LayerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Layer.page.json')} />
);
