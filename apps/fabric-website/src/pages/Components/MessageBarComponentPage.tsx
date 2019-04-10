import * as React from 'react';
import { MessageBarPage } from '@uifabric/fabric-website-resources/lib/components/pages/MessageBarPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const MessageBarComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="MessageBar" backgroundColor="#038387" useDefaultComponentLinks />
      <MessageBarPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
