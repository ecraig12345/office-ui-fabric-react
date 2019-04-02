import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const RectanglePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/Rectangle.page.json')} />
);
