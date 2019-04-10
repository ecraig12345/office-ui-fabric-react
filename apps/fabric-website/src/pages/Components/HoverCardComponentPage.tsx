import * as React from 'react';
import { HoverCardPage } from '@uifabric/fabric-website-resources/lib/components/pages/HoverCardPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const HoverCardComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="HoverCard" backgroundColor="#038387" useDefaultComponentLinks />
      <HoverCardPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
