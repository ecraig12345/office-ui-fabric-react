import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const EventGroupPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/EventGroup.page.json')} />
);
