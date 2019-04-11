import * as React from 'react';
import { NavPage } from '@uifabric/fabric-website-resources/lib/components/pages/NavPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const NavComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Nav" backgroundColor="#038387" useDefaultComponentLinks />
      <NavPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
