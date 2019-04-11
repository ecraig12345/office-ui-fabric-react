import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { CoachmarkPageProps } from 'office-ui-fabric-react/lib/components/Coachmark/Coachmark.doc';

export const CoachmarkPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...CoachmarkPageProps, ...props }} />;
