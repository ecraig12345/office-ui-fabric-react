import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DocumentCardPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/DocumentCard.page.json')} />
);
