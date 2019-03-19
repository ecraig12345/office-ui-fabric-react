import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ISemanticColorsPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ISemanticColors.page.json')} />
);
