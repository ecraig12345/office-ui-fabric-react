import * as React from 'react';
import { SwatchColorPickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/SwatchColorPickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const SwatchColorPickerComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="SwatchColorPicker" backgroundColor="#038387" useDefaultComponentLinks />
      <SwatchColorPickerPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
