import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { PersonaPageProps } from 'office-ui-fabric-react/lib/components/Persona/Persona.doc';

export const PersonaPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/page-json-generator/lib/pages/office-ui-fabric-react/Persona.page.json')}
    {...{ ...PersonaPageProps, ...props }}
  />
);
