import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListCustomRowsPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListCustomRowsPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListCustomRowsPageProps, ...props }} />;
