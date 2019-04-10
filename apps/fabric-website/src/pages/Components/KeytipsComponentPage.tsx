import * as React from 'react';
import { KeytipsPage } from '@uifabric/fabric-website-resources/lib/components/pages/KeytipsPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const KeytipsComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Keytips" backgroundColor="#038387" useDefaultComponentLinks />
      <KeytipsPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
