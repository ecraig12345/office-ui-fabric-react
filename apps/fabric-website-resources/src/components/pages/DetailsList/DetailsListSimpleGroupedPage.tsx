import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListSimpleGroupedPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListSimpleGroupedPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListSimpleGroupedPageProps, ...props }} />;
