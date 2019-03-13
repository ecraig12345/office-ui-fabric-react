import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { ScrollablePanePageProps } from 'office-ui-fabric-react/lib/components/ScrollablePane/ScrollablePane.doc';

export const ScrollablePanePage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ScrollablePanePageProps, ...props }} />
);
