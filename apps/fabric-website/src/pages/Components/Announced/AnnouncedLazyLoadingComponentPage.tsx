import * as React from 'react';
import { AnnouncedLazyLoadingPage } from '@uifabric/fabric-website-resources/lib/components/pages/Announced/AnnouncedLazyLoadingPage';
import { pageStyles } from '../../Page.styles';

export const AnnouncedLazyLoadingComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <AnnouncedLazyLoadingPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
