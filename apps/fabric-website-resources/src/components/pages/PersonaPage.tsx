import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { PersonaPageProps } from 'office-ui-fabric-react/lib/components/Persona/Persona.doc';

export const PersonaPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Persona.page.json')}
    {...{ ...PersonaPageProps, ...props }}
  />
);
