import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const LabelPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Label.page.json')} />
);
