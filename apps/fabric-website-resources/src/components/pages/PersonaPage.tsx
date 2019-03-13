import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { PersonaPageProps } from 'office-ui-fabric-react/lib/components/Persona/Persona.doc';

export const PersonaPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...PersonaPageProps, ...props }} />
);
