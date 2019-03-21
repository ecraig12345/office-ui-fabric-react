import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ImagePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Image.page.json')} />
);
