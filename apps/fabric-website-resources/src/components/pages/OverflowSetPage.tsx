import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { OverflowSetPageProps } from 'office-ui-fabric-react/lib/components/OverflowSet/OverflowSet.doc';

export const OverflowSetPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...OverflowSetPageProps, ...props }} />
);
