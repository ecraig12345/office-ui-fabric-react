import * as React from 'react';
import { TogglePage } from '@uifabric/fabric-website-resources/lib/components/pages/TogglePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ToggleComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Toggle" backgroundColor="#038387" useDefaultComponentLinks />
      <TogglePage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
