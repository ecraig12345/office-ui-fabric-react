import * as React from 'react';
import { GroupedListPage } from '@uifabric/fabric-website-resources/lib/components/pages/GroupedListPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const GroupedListComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="GroupedList"
        backgroundColor="#038387"
        links={[
          {
            text: 'Overview',
            location: 'Overview'
          },
          {
            text: 'Variants',
            location: 'Variants'
          },
          {
            text: 'Implementation',
            location: 'Implementation'
          }
        ]}
      />
      <GroupedListPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
