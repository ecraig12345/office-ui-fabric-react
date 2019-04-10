import * as React from 'react';
import { CalloutPage } from '@uifabric/fabric-website-resources/lib/components/pages/CalloutPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const CalloutComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Callout" backgroundColor="#038387" useDefaultComponentLinks />
      <CalloutPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
