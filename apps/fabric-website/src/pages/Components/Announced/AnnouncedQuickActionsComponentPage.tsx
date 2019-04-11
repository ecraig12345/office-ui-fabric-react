import * as React from 'react';
import { AnnouncedQuickActionsPage } from '@uifabric/fabric-website-resources/lib/components/pages/Announced/AnnouncedQuickActionsPage';
import { pageStyles } from '../../Page.styles';

export const AnnouncedQuickActionsComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <AnnouncedQuickActionsPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
