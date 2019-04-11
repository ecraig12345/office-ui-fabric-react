import * as React from 'react';
import { IconPage } from '@uifabric/fabric-website-resources/lib/components/pages/IconPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const IconComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Icon" backgroundColor="#038387" useDefaultComponentLinks />
      <IconPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
