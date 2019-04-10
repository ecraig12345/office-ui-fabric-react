import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { MarqueeSelectionPageProps } from 'office-ui-fabric-react/lib/components/MarqueeSelection/MarqueeSelection.doc';

export const MarqueeSelectionPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...MarqueeSelectionPageProps, ...props }} />;
