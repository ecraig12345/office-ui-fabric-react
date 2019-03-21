import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const KeytipPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Keytip.page.json')} />
);
