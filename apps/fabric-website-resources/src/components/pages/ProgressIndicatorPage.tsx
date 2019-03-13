import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { ProgressIndicatorPageProps } from 'office-ui-fabric-react/lib/components/ProgressIndicator/ProgressIndicator.doc';

export const ProgressIndicatorPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ProgressIndicatorPageProps, ...props }} />
);
