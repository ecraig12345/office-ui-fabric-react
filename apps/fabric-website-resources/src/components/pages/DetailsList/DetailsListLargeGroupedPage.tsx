import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';
import { DetailsListLargeGroupedPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListLargeGroupedPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DetailsListLargeGroupedPageProps, ...props }} />
);
