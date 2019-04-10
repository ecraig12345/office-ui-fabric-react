import * as React from 'react';
import { LinkPage } from '@uifabric/fabric-website-resources/lib/components/pages/LinkPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const LinkComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Link" backgroundColor="#038387" useDefaultComponentLinks />
      <LinkPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
