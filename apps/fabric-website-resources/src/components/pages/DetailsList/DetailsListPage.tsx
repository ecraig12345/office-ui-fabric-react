import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListPageProps, ...props }} />;
