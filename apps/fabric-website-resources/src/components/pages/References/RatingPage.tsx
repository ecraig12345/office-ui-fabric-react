import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const RatingPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Rating.page.json')} />
);
