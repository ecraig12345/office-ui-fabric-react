import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { ShimmerPageProps } from 'office-ui-fabric-react/lib/components/Shimmer/Shimmer.doc';

export const ShimmerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Shimmer.page.json')}
    {...{ ...ShimmerPageProps, ...props }}
  />
);
