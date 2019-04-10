import * as React from 'react';
import { PanelPage } from '@uifabric/fabric-website-resources/lib/components/pages/PanelPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const PanelComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Panel" backgroundColor="#038387" useDefaultComponentLinks />
      <PanelPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
