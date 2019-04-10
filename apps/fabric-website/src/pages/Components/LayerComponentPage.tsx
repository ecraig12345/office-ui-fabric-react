import * as React from 'react';
import { LayerPage } from '@uifabric/fabric-website-resources/lib/components/pages/LayerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const LayerComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Layer" backgroundColor="#038387" useDefaultComponentLinks />
      <LayerPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
