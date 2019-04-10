import * as React from 'react';
import { SliderPage } from '@uifabric/fabric-website-resources/lib/components/pages/SliderPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const SliderComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Slider" backgroundColor="#038387" useDefaultComponentLinks />
      <SliderPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
