import * as React from 'react';
import { AnnouncedPage } from '@uifabric/fabric-website-resources/lib/components/pages/Announced/AnnouncedPage';
import { PageHeader } from '../../../components/PageHeader/PageHeader';
import { pageStyles } from '../../Page.styles';

export const AnnouncedComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Announced"
        backgroundColor="#038387"
        links={[
          {
            text: 'Overview',
            location: 'Overview'
          },
          {
            text: 'Implementation',
            location: 'Implementation'
          }
        ]}
      />
      <AnnouncedPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
