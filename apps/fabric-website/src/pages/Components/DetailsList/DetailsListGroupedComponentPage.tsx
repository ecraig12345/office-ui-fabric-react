import * as React from 'react';
import { DetailsListSimpleGroupedPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListSimpleGroupedPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListGroupedComponentPage: React.StatelessComponent = () => {
  return <DetailsListSimpleGroupedPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
