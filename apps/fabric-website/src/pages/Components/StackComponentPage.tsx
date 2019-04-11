import * as React from 'react';
import { StackPage } from '@uifabric/fabric-website-resources/lib/components/pages/StackPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const StackComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Stack" backgroundColor="#038387" useDefaultComponentLinks />
      <StackPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
