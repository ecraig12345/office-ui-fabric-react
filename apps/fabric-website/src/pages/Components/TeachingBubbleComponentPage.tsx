import * as React from 'react';
import { TeachingBubblePage } from '@uifabric/fabric-website-resources/lib/components/pages/TeachingBubblePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const TeachingBubbleComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="TeachingBubble" backgroundColor="#038387" useDefaultComponentLinks />
      <TeachingBubblePage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
