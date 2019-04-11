import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { LayerPageProps } from 'office-ui-fabric-react/lib/components/Layer/Layer.doc';

export const LayerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...LayerPageProps, ...props }} />;
