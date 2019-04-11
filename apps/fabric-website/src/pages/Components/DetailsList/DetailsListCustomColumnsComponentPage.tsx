import * as React from 'react';
import { DetailsListCustomColumnsPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListCustomColumnsPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListCustomColumnsComponentPage: React.StatelessComponent = () => {
  return <DetailsListCustomColumnsPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
