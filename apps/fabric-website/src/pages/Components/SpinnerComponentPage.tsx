import * as React from 'react';
import { SpinnerPage } from '@uifabric/fabric-website-resources/lib/components/pages/SpinnerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const SpinnerComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Spinner" backgroundColor="#038387" useDefaultComponentLinks />
      <SpinnerPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
