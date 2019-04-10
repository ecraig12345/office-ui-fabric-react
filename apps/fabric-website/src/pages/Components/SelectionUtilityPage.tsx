import * as React from 'react';
import { SelectionPage } from '@uifabric/fabric-website-resources/lib/components/pages/SelectionPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const SelectionUtilityPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Selection"
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
      <SelectionPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
