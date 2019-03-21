import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ColorPickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ColorPicker.page.json')} />
);
