import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const PanelPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Panel.page.json')} />
);
