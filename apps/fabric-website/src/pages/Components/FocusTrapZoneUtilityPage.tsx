import * as React from 'react';
import { FocusTrapZonePage } from '@uifabric/fabric-website-resources/lib/components/pages/FocusTrapZonePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const FocusTrapZoneUtilityPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="FocusTrapZone"
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
      <FocusTrapZonePage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
