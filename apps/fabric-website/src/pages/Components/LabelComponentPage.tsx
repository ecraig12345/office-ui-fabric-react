import * as React from 'react';
import { LabelPage } from '@uifabric/fabric-website-resources/lib/components/pages/LabelPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const LabelComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Label" backgroundColor="#038387" useDefaultComponentLinks />
      <LabelPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
