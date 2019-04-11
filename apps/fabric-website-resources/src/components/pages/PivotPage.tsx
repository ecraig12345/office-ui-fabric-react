import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { PivotPageProps } from 'office-ui-fabric-react/lib/components/Pivot/Pivot.doc';

export const PivotPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...PivotPageProps, ...props }} />;
