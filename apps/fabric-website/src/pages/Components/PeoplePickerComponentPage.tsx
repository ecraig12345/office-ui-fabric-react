import * as React from 'react';
import { PeoplePickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/PeoplePickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const PeoplePickerComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="PeoplePicker" backgroundColor="#038387" useDefaultComponentLinks />
      <PeoplePickerPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
