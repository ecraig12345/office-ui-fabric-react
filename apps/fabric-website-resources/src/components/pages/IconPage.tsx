import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { IconPageProps } from 'office-ui-fabric-react/lib/components/Icon/Icon.doc';

export const IconPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...IconPageProps, ...props }} />
);
