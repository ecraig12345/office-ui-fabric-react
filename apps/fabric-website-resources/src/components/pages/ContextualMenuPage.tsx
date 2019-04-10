import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { ContextualMenuPageProps } from 'office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.doc';

export const ContextualMenuPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ContextualMenuPageProps, ...props }} />;
