import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ExtendedPickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ExtendedPicker.page.json')} />
);
