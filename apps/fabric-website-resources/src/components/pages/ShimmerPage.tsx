import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { ShimmerPageProps } from 'office-ui-fabric-react/lib/components/Shimmer/Shimmer.doc';

export const ShimmerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ShimmerPageProps, ...props }} />
);
