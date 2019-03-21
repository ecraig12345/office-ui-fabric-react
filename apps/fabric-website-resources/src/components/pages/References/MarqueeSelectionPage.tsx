import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const MarqueeSelectionPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/MarqueeSelection.page.json')} />
);
