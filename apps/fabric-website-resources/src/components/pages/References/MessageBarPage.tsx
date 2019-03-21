import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const MessageBarPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/MessageBar.page.json')} />
);
