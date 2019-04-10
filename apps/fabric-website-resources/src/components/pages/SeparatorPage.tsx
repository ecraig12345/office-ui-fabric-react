import * as React from 'react';

import { SeparatorPageProps } from 'office-ui-fabric-react/lib/components/Separator/Separator.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

export const SeparatorPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SeparatorPageProps, ...props }} />;
