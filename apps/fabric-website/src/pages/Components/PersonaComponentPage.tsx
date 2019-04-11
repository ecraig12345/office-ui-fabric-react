import * as React from 'react';
import { PersonaPage } from '@uifabric/fabric-website-resources/lib/components/pages/PersonaPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const PersonaComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Persona" backgroundColor="#038387" useDefaultComponentLinks />
      <PersonaPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
