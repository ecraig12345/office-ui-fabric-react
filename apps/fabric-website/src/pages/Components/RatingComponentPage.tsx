import * as React from 'react';
import { RatingPage } from '@uifabric/fabric-website-resources/lib/components/pages/RatingPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const RatingComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Rating" backgroundColor="#038387" useDefaultComponentLinks />
      <RatingPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
