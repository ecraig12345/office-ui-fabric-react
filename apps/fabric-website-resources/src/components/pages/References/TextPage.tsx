import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const TextPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Text.page.json')} />
);
