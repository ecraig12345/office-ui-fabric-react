import * as React from 'react';
import { FacepilePage } from '@uifabric/fabric-website-resources/lib/components/pages/FacepilePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const FacepileComponentPage: React.StatelessComponent = () =>  {

    return (
      <div className={pageStyles.basePage}>
        <PageHeader pageTitle="Facepile" backgroundColor="#038387" useDefaultComponentLinks />
        <FacepilePage styles={pageStyles.demoPage} isHeaderVisible={false} />
      </div>
  );
};
