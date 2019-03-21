import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const SpinnerPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Spinner.page.json')} />
);
