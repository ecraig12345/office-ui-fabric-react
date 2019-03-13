import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { PanelPageProps } from 'office-ui-fabric-react/lib/components/Panel/Panel.doc';

export const PanelPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...PanelPageProps, ...props }} />
);
