import * as React from 'react';
import { CalendarPage } from '@uifabric/fabric-website-resources/lib/components/pages/CalendarPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const CalendarComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Calendar" backgroundColor="#038387" useDefaultComponentLinks />
      <CalendarPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
