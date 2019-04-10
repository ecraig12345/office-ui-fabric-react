import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { StackPageProps } from 'office-ui-fabric-react/lib/components/Stack/Stack.doc';

export const StackPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...StackPageProps, ...props }} />;
