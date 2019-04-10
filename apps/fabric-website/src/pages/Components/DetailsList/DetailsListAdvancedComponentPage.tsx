import * as React from 'react';
import { DetailsListAdvancedPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListAdvancedPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListAdvancedComponentPage: React.StatelessComponent = () => {
  return <DetailsListAdvancedPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
