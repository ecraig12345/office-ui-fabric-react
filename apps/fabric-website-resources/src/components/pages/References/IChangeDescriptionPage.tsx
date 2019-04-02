import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const IChangeDescriptionPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/references/IChangeDescription.page.json')} />
);
