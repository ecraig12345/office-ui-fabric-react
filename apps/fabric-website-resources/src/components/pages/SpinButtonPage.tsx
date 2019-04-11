import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { SpinButtonPageProps } from 'office-ui-fabric-react/lib/components/SpinButton/SpinButton.doc';

export const SpinButtonPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SpinButtonPageProps, ...props }} />;
