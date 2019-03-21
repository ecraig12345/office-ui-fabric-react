import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const CalloutPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Callout.page.json')} />
);
