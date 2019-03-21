import * as React from 'react';
import { PersonaPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/PersonaPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class PersonaComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Persona" backgroundColor="#038387" />
          <PersonaPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
