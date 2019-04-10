import * as React from 'react';
import { DetailsListCompactPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListCompactPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListCompactComponentPage: React.StatelessComponent = () => {
  return <DetailsListCompactPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
