import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { SpinnerPageProps } from 'office-ui-fabric-react/lib/components/Spinner/Spinner.doc';

export const SpinnerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...SpinnerPageProps, ...props }} />
);
