import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ButtonPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Button.page.json')} />
);
