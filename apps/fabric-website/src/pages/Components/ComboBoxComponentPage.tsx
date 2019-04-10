import * as React from 'react';
import { ComboBoxPage } from '@uifabric/fabric-website-resources/lib/components/pages/ComboBoxPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ComboBoxComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="ComboBox"
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
      <ComboBoxPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
