import * as React from 'react';
import { CoachmarkPage } from '@uifabric/fabric-website-resources/lib/components/pages/CoachmarkPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const CoachmarkComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Coachmark" backgroundColor="#038387" useDefaultComponentLinks />
      <CoachmarkPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
