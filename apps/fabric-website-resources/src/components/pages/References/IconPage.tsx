import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IconPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Icon.page.json')} />
);
