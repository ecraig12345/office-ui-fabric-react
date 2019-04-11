import * as React from 'react';

import { ListPageProps } from 'office-ui-fabric-react/lib/components/List/List.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

export const ListPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ListPageProps, ...props }} />;
