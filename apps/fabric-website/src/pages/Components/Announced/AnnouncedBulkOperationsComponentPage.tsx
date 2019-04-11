import * as React from 'react';
import { AnnouncedBulkOperationsPage } from '@uifabric/fabric-website-resources/lib/components/pages/Announced/AnnouncedBulkOperationsPage';
import { pageStyles } from '../../Page.styles';

export const AnnouncedBulkOperationsComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <AnnouncedBulkOperationsPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
