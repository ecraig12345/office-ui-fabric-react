import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListCustomFooterPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListCustomFooterPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListCustomFooterPageProps, ...props }} />;
