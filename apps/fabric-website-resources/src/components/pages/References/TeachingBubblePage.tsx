import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const TeachingBubblePage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/TeachingBubble.page.json')} />
);
