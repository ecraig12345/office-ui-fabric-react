import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const PositioningContainerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/PositioningContainer.page.json')} />
);
