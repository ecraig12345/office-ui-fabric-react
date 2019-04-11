import * as React from 'react';
import { OverlayPage } from '@uifabric/fabric-website-resources/lib/components/pages/OverlayPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const OverlayComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Overlay" backgroundColor="#038387" useDefaultComponentLinks />
      <OverlayPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
