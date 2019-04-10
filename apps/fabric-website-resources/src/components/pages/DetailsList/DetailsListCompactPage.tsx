import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListCompactPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListCompactPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListCompactPageProps, ...props }} />;
