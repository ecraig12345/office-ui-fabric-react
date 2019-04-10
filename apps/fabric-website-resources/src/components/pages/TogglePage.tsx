import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { TogglePageProps } from 'office-ui-fabric-react/lib/components/Toggle/Toggle.doc';

export const TogglePage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...TogglePageProps, ...props }} />;
