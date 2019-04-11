import * as React from 'react';
import { AnnouncedSearchResultsPage } from '@uifabric/fabric-website-resources/lib/components/pages/Announced/AnnouncedSearchResultsPage';
import { pageStyles } from '../../Page.styles';

export const AnnouncedSearchResultsComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <AnnouncedSearchResultsPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
