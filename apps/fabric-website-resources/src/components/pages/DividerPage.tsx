import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { DividerPageProps } from 'office-ui-fabric-react/lib/components/Divider/Divider.doc';

export const DividerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DividerPageProps, ...props }} />
);
