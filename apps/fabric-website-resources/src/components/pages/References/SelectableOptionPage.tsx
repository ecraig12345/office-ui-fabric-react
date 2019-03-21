import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SelectableOptionPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/SelectableOption.page.json')} />
);
