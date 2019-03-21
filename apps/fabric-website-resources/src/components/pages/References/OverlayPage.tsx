import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const OverlayPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Overlay.page.json')} />
);
