import * as React from 'react';
import { DetailsListCustomFooterPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListCustomFooterPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListCustomFooterComponentPage: React.StatelessComponent = () => {
  return <DetailsListCustomFooterPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
