import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const BreadcrumbPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Breadcrumb.page.json')} />
);
