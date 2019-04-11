import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListCustomGroupHeadersPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListCustomGroupHeadersPage = (props: Partial<IDemoPageProps>) => (
  <DemoPage {...{ ...DetailsListCustomGroupHeadersPageProps, ...props }} />
);
