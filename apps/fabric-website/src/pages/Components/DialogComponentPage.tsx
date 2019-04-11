import * as React from 'react';
import { DialogPage } from '@uifabric/fabric-website-resources/lib/components/pages/DialogPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const DialogComponentPage: React.StatelessComponent = () =>  {

    return (
      <div className={pageStyles.basePage}>
        <PageHeader pageTitle="Dialog" backgroundColor="#038387" useDefaultComponentLinks />
        <DialogPage styles={pageStyles.demoPage} isHeaderVisible={false} />
      </div>
  );
};
