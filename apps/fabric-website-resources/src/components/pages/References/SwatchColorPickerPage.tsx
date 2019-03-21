import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SwatchColorPickerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/SwatchColorPicker.page.json')} />
);
