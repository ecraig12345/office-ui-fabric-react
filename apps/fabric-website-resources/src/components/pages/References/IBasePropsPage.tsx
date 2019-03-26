import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IBasePropsPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IBaseProps.page.json')} />
);
