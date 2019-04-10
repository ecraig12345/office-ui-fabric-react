import * as React from 'react';
import { ContextualMenuPage } from '@uifabric/fabric-website-resources/lib/components/pages/ContextualMenuPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ContextualMenuComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="ContextualMenu" backgroundColor="#038387" useDefaultComponentLinks />
      <ContextualMenuPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
