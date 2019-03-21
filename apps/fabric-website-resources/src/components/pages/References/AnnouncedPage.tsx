import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const AnnouncedPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Announced.page.json')} />
);
