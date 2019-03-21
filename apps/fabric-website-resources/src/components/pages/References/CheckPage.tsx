import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const CheckPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Check.page.json')} />
);
