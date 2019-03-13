import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { CommandBarPageProps } from 'office-ui-fabric-react/lib/components/CommandBar/CommandBar.doc';

export const CommandBarPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...CommandBarPageProps, ...props }} />
);
