import * as React from 'react';
import { DetailsListLargeGroupedPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListLargeGroupedPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListLargeGroupedComponentPage: React.StatelessComponent = () => {
  return <DetailsListLargeGroupedPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
