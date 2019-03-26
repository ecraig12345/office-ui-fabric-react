import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IAnimationStylesPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IAnimationStyles.page.json')} />
);
