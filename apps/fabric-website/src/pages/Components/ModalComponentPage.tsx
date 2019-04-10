import * as React from 'react';
import { ModalPage } from '@uifabric/fabric-website-resources/lib/components/pages/ModalPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ModalComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Modal" backgroundColor="#038387" useDefaultComponentLinks />
      <ModalPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
