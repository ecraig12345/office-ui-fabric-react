import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { NavPageProps } from 'office-ui-fabric-react/lib/components/Nav/Nav.doc';

export const NavPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...NavPageProps, ...props }} />
);
