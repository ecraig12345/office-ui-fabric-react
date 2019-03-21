import * as React from 'react';

import { PropertiesTableSet } from '@uifabric/example-app-base';

export const PersonaPage = (props: { isHeaderVisible: boolean }) => (
  <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/Persona.page.json')} />
);
