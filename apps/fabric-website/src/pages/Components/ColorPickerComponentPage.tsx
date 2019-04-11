import * as React from 'react';
import { ColorPickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/ColorPickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ColorPickerComponentPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader
        pageTitle="ColorPicker"
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
      <ColorPickerPage styles={pageStyles.demoPage} isHeaderVisible={false} />
    </div>
  );
};
