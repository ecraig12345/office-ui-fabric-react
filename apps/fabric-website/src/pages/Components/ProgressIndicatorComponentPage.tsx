import * as React from 'react';
import { ProgressIndicatorPage } from '@uifabric/fabric-website-resources/lib/components/pages/ProgressIndicatorPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ProgressIndicatorComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="ProgressIndicator" backgroundColor="#038387" useDefaultComponentLinks />
      <ProgressIndicatorPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
