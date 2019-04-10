import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { ShimmerPageProps } from 'office-ui-fabric-react/lib/components/Shimmer/Shimmer.doc';

export const ShimmerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ShimmerPageProps, ...props }} />;
