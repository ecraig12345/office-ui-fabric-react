import * as React from 'react';
import { DetailsListCustomGroupHeadersPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListCustomGroupHeadersPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListCustomGroupHeadersComponentPage: React.StatelessComponent = () => {
  return <DetailsListCustomGroupHeadersPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
