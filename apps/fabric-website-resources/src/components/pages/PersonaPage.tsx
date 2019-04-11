import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { PersonaPageProps } from 'office-ui-fabric-react/lib/components/Persona/Persona.doc';

export const PersonaPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...PersonaPageProps, ...props }} />;
