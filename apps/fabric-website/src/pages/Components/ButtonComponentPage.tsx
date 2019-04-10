import * as React from 'react';
import { ButtonPage } from '@uifabric/fabric-website-resources/lib/components/pages/ButtonPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ButtonComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Button"
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
      <ButtonPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
