import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ProgressIndicatorPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ProgressIndicator.page.json')} />
);
