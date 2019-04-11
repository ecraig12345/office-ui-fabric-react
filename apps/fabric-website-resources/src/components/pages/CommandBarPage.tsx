import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { CommandBarPageProps } from 'office-ui-fabric-react/lib/components/CommandBar/CommandBar.doc';

export const CommandBarPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...CommandBarPageProps, ...props }} />;
