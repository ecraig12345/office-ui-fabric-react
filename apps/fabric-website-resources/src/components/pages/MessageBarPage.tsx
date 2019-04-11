import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { MessageBarPageProps } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar.doc';

export const MessageBarPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...MessageBarPageProps, ...props }} />;
