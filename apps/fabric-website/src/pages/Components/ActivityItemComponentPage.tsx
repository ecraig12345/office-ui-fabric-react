import * as React from 'react';
import { ActivityItemPage } from '@uifabric/fabric-website-resources/lib/components/pages/ActivityItemPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ActivityItemComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="ActivityItem" backgroundColor="#038387" useDefaultComponentLinks />
      <ActivityItemPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
