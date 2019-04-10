import * as React from 'react';
import { DetailsListCustomRowsPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListCustomRowsPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListCustomRowsComponentPage: React.StatelessComponent = () => {
  return <DetailsListCustomRowsPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
