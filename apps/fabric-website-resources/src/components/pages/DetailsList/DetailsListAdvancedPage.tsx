import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListAdvancedPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListAdvancedPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListAdvancedPageProps, ...props }} />;
