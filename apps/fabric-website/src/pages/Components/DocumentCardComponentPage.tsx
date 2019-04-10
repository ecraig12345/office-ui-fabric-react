import * as React from 'react';
import { DocumentCardPage } from '@uifabric/fabric-website-resources/lib/components/pages/DocumentCardPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const DocumentCardComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="DocumentCard" backgroundColor="#038387" useDefaultComponentLinks />
      <DocumentCardPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
