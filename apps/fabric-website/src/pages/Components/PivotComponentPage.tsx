import * as React from 'react';
import { PivotPage } from '@uifabric/fabric-website-resources/lib/components/pages/PivotPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const PivotComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Pivot" backgroundColor="#038387" useDefaultComponentLinks />
      <PivotPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
