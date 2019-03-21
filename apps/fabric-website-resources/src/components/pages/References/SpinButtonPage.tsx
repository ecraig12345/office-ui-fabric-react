import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SpinButtonPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/SpinButton.page.json')} />
);
