import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const GlobalSettingsPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/GlobalSettings.page.json')} />
);
