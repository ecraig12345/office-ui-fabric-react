import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const TooltipPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Tooltip.page.json')} />
);
