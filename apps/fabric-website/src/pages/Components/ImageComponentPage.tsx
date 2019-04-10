import * as React from 'react';
import { ImagePage } from '@uifabric/fabric-website-resources/lib/components/pages/ImagePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ImageComponentPage: React.StatelessComponent = () =>  {

    return (
      <div className={pageStyles.basePage}>
        <PageHeader pageTitle="Image" backgroundColor="#038387" useDefaultComponentLinks />
        <ImagePage styles={pageStyles.demoPage} isHeaderVisible={false} />
      </div>
  );
};
