import * as React from 'react';
import { TooltipPage } from '@uifabric/fabric-website-resources/lib/components/pages/TooltipPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const TooltipComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Tooltip"
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
      <TooltipPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
