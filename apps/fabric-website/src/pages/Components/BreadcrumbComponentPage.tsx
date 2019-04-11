import * as React from 'react';
import { BreadcrumbPage } from '@uifabric/fabric-website-resources/lib/components/pages/BreadcrumbPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const BreadcrumbComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Breadcrumb" backgroundColor="#038387" useDefaultComponentLinks />
      <BreadcrumbPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
