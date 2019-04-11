import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { ScrollablePanePageProps } from 'office-ui-fabric-react/lib/components/ScrollablePane/ScrollablePane.doc';

export const ScrollablePanePage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ScrollablePanePageProps, ...props }} />;
