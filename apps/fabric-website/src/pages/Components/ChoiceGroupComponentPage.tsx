import * as React from 'react';
import { ChoiceGroupPage } from '@uifabric/fabric-website-resources/lib/components/pages/ChoiceGroupPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ChoiceGroupComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="ChoiceGroup" backgroundColor="#038387" useDefaultComponentLinks />
      <ChoiceGroupPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
