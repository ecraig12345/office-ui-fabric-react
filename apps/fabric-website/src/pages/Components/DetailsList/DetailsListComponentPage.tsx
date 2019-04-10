import * as React from 'react';
import { DetailsListPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListPage';
import { PageHeader } from '../../../components/PageHeader/PageHeader';
import { pageStyles } from '../../Page.styles';

export const DetailsListComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="DetailsList" backgroundColor="#038387" useDefaultComponentLinks />
      <DetailsListPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
