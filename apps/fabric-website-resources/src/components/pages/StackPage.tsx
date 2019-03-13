import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { StackPageProps } from 'office-ui-fabric-react/lib/components/Stack/Stack.doc';

export const StackPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...StackPageProps, ...props }} />
);
