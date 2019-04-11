import * as React from 'react';
import { ShimmerPage } from '@uifabric/fabric-website-resources/lib/components/pages/ShimmerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ShimmerComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Shimmer" backgroundColor="#038387" useDefaultComponentLinks />
      <ShimmerPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
