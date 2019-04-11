import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { FocusZonePageProps } from 'office-ui-fabric-react/lib/components/FocusZone/FocusZone.doc';

export const FocusZonePage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...FocusZonePageProps, ...props }} />;
