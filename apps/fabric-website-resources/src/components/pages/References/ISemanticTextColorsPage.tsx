import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ISemanticTextColorsPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../common/pages/styling/ISemanticTextColors.page.json')} />
);
