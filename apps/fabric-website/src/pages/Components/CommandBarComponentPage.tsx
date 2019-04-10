import * as React from 'react';
import { CommandBarPage } from '@uifabric/fabric-website-resources/lib/components/pages/CommandBarPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const CommandBarComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="CommandBar" backgroundColor="#038387" useDefaultComponentLinks />
      <CommandBarPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
