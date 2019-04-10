import * as React from 'react';
import { SeparatorPage } from '@uifabric/fabric-website-resources/lib/components/pages/SeparatorPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const SeparatorComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Separator"
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
      <SeparatorPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
