import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { LabelPageProps } from 'office-ui-fabric-react/lib/components/Label/Label.doc';

export const LabelPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...LabelPageProps, ...props }} />;
