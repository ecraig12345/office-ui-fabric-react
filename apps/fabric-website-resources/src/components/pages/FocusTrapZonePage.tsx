import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { FocusTrapZonePageProps } from 'office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.doc';

export const FocusTrapZonePage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...FocusTrapZonePageProps, ...props }} />;
