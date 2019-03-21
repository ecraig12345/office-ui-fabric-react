import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ContextualMenuPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ContextualMenu.page.json')} />
);
