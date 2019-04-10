import * as React from 'react';
import { TextFieldPage } from '@uifabric/fabric-website-resources/lib/components/pages/TextFieldPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const TextFieldComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="TextField"
        backgroundColor="#038387"
        links={[
          {
            text: 'Overview',
            location: 'Overview'
          },
          {
            text: 'Best Practices',
            location: 'BestPractices'
          },
          {
            text: 'Variants',
            location: 'Variants'
          },
          {
            text: 'Implementation Examples',
            location: 'ImplementationExamples'
          },
          {
            text: 'Implementation',
            location: 'Implementation'
          }
        ]}
      />
      <TextFieldPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
