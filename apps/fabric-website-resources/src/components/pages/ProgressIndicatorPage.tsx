import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { ProgressIndicatorPageProps } from 'office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.doc';

export const ProgressIndicatorPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ProgressIndicatorPageProps, ...props }} />;
