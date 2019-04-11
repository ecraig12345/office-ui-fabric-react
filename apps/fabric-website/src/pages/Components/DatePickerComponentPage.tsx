import * as React from 'react';
import { DatePickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/DatePickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const DatePickerComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="DatePicker" backgroundColor="#038387" useDefaultComponentLinks />
      <DatePickerPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
