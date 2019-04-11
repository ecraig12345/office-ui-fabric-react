import * as React from 'react';
import { ThemePage } from '@uifabric/fabric-website-resources/lib/components/pages/ThemePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ThemesUtilityPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="Themes"
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
      <ThemePage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
