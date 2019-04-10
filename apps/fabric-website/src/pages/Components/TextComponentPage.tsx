import * as React from 'react';
import { TextPage } from '@uifabric/fabric-website-resources/lib/components/pages/TextPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const TextComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Text"
        backgroundColor="#038387"
        links={[
          {
            text: 'Overview',
            location: 'Overview'
          },
          {
            text: 'Variants',
            location: 'Variants'
          },
          {
            text: 'Implementation',
            location: 'Implementation'
          }
        ]}
      />
      <TextPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
