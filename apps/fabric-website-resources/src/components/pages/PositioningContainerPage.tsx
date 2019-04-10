import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { PositioningContainerPageProps } from 'office-ui-fabric-react/lib/components/Coachmark/PositioningContainer/PositioningContainer.doc';

export const PositioningContainerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...PositioningContainerPageProps, ...props }} />;
