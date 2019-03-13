import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { LinkPageProps } from 'office-ui-fabric-react/lib/components/Link/Link.doc';

export const LinkPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...LinkPageProps, ...props }} />
);
