import * as React from 'react';
import { FocusZonePage } from '@uifabric/fabric-website-resources/lib/components/pages/FocusZonePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const FocusZoneUtilityPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="FocusZone"
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
      <FocusZonePage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
