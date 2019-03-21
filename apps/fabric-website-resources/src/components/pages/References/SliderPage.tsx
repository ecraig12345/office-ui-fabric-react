import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SliderPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Slider.page.json')} />
);
