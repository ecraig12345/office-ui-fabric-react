import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IFontFacePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('@uifabric/api-docs/lib/pages/references/IFontFace.page.json')} />
);
