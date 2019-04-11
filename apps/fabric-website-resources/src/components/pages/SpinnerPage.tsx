import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { SpinnerPageProps } from 'office-ui-fabric-react/lib/components/Spinner/Spinner.doc';

export const SpinnerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SpinnerPageProps, ...props }} />;
