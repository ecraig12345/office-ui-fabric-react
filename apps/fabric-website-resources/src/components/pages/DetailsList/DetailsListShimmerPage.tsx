import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListShimmerPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListShimmerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListShimmerPageProps, ...props }} />;
