import * as React from 'react';
import { DropdownPage } from '@uifabric/fabric-website-resources/lib/components/pages/DropdownPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const DropdownComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Dropdown" backgroundColor="#038387" useDefaultComponentLinks />
      <DropdownPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
