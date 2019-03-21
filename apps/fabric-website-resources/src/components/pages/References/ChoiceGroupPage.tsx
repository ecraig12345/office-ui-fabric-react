import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ChoiceGroupPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/ChoiceGroup.page.json')} />
);
