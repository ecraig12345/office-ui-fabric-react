import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const AutofillPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Autofill.page.json')} />
);
