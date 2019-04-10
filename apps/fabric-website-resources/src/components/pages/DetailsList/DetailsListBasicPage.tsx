import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListBasicPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListBasicPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListBasicPageProps, ...props }} />;
