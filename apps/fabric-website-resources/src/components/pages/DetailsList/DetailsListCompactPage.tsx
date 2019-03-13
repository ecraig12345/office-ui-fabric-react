import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';
import { DetailsListCompactPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListCompactPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DetailsListCompactPageProps, ...props }} />
);
