import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const ModalPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Modal.page.json')} />
);
