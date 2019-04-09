import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IFontFacePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('@uifabric/page-json-generator/lib/pages/references/IFontFace.page.json')} />
);
