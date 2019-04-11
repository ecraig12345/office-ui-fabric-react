import * as React from 'react';
import { ScrollablePanePage } from '@uifabric/fabric-website-resources/lib/components/pages/ScrollablePanePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ScrollablePaneComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="ScrollablePane" backgroundColor="#038387" useDefaultComponentLinks />
      <ScrollablePanePage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
