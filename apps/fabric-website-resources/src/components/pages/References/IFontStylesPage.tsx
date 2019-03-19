import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IFontStylesPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/IFontStyles.page.json')} />
);
