import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const BaseComponentPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/BaseComponent.page.json')} />
);
