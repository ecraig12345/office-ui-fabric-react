import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListCustomColumnsPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListCustomColumnsPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListCustomColumnsPageProps, ...props }} />;
