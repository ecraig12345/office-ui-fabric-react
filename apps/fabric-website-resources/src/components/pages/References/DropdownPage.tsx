import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DropdownPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Dropdown.page.json')} />
);
