import * as React from 'react';
import { CheckboxPage } from '@uifabric/fabric-website-resources/lib/components/pages/CheckboxPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const CheckboxComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Checkbox" backgroundColor="#038387" useDefaultComponentLinks />
      <CheckboxPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
