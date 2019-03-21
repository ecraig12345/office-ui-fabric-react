import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DialogPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Dialog.page.json')} />
);
