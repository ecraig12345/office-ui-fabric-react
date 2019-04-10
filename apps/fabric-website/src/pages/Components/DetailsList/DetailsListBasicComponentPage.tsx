import * as React from 'react';
import { DetailsListBasicPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListBasicPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListBasicComponentPage: React.StatelessComponent = () => {
  return <DetailsListBasicPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
