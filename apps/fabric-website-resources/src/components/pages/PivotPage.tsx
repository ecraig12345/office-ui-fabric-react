import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { PivotPageProps } from 'office-ui-fabric-react/lib/components/Pivot/Pivot.doc';

export const PivotPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...PivotPageProps, ...props }} />
);
