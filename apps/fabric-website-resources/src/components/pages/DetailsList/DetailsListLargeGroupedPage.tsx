import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListLargeGroupedPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListLargeGroupedPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListLargeGroupedPageProps, ...props }} />;
