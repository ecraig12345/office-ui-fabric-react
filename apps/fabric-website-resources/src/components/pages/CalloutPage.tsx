import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { CalloutPageProps } from 'office-ui-fabric-react/lib/components/Callout/Callout.doc';

export const CalloutPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...CalloutPageProps, ...props }} />
);
