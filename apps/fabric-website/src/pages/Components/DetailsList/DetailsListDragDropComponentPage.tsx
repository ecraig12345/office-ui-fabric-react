import * as React from 'react';
import { DetailsListDragDropPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListDragDropPage';
import { pageStyles } from '../../Page.styles';

export const DetailsListDragDropComponentPage: React.StatelessComponent = () => {
  return <DetailsListDragDropPage styles={pageStyles.demoPage} isHeaderVisible={false} />;
};
