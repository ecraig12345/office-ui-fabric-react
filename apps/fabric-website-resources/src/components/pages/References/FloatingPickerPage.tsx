import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const FloatingPickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/FloatingPicker.page.json')} />
);
