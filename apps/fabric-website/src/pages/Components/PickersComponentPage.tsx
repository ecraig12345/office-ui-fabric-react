import * as React from 'react';
import { PickersPage } from '@uifabric/fabric-website-resources/lib/components/pages/PickersPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const PickersComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Pickers"
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
      <PickersPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
