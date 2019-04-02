import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IPointPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IPoint.page.json')} />
);
