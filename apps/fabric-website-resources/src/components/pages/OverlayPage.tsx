import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { OverlayPageProps } from 'office-ui-fabric-react/lib/components/Overlay/Overlay.doc';

export const OverlayPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...OverlayPageProps, ...props }} />;
