import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { DialogPageProps } from 'office-ui-fabric-react/lib/components/Dialog/Dialog.doc';

export const DialogPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DialogPageProps, ...props }} />;
