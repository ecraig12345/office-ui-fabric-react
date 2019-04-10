import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { PanelPageProps } from 'office-ui-fabric-react/lib/components/Panel/Panel.doc';

export const PanelPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...PanelPageProps, ...props }} />;
