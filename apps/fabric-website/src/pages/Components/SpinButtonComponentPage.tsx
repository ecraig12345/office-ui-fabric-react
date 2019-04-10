import * as React from 'react';
import { SpinButtonPage } from '@uifabric/fabric-website-resources/lib/components/pages/SpinButtonPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const SpinButtonComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="SpinButton" backgroundColor="#038387" useDefaultComponentLinks />
      <SpinButtonPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
