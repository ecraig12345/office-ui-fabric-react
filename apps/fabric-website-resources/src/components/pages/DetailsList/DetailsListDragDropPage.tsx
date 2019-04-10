import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListDragDropPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListDragDropPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DetailsListDragDropPageProps, ...props }} />;
