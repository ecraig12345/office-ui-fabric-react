import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';
import { DetailsListSimpleGroupedPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListSimpleGroupedPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DetailsListSimpleGroupedPageProps, ...props }} />
);
