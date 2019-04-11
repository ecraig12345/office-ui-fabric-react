import * as React from 'react';
import { DetailsListShimmerPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListShimmerPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListShimmerComponentPage: React.StatelessComponent = () => {
  return <DetailsListShimmerPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
