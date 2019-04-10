import * as React from 'react';
import { ResizeGroupPage } from '@uifabric/fabric-website-resources/lib/components/pages/ResizeGroupPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ResizeGroupComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="ResizeGroupPage" backgroundColor="#038387" useDefaultComponentLinks />
      <ResizeGroupPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
