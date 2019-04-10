import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { CalloutPageProps } from 'office-ui-fabric-react/lib/components/Callout/Callout.doc';

export const CalloutPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...CalloutPageProps, ...props }} />;
