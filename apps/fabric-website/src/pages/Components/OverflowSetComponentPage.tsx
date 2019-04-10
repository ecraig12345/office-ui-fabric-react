import * as React from 'react';
import { OverflowSetPage } from '@uifabric/fabric-website-resources/lib/components/pages/OverflowSetPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const OverflowSetComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="OverflowSet" backgroundColor="#038387" useDefaultComponentLinks />
      <OverflowSetPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
