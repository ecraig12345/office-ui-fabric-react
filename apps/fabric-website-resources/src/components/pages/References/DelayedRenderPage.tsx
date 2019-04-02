import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const DelayedRenderPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/DelayedRender.page.json')} />
);
