import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { SpinButtonPageProps } from 'office-ui-fabric-react/lib/components/SpinButton/SpinButton.doc';

export const SpinButtonPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...SpinButtonPageProps, ...props }} />
);
