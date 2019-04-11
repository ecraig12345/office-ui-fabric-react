import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { OverflowSetPageProps } from 'office-ui-fabric-react/lib/components/OverflowSet/OverflowSet.doc';

export const OverflowSetPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...OverflowSetPageProps, ...props }} />;
