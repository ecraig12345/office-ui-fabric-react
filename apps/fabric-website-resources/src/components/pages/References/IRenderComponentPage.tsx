import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IRenderComponentPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IRenderComponent.page.json')} />
);
