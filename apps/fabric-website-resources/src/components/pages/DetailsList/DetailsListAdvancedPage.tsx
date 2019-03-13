import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';
import { DetailsListAdvancedPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListAdvancedPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DetailsListAdvancedPageProps, ...props }} />
);
