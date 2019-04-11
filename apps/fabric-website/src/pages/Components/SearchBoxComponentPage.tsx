import * as React from 'react';
import { SearchBoxPage } from '@uifabric/fabric-website-resources/lib/components/pages/SearchBoxPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const SearchBoxComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="SearchBox" backgroundColor="#038387" useDefaultComponentLinks />
      <SearchBoxPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
