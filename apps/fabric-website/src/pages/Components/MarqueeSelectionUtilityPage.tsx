import * as React from 'react';
import { MarqueeSelectionPage } from '@uifabric/fabric-website-resources/lib/components/pages/MarqueeSelectionPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const MarqueeSelectionUtilityPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="MarqueeSelection"
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
      <MarqueeSelectionPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
