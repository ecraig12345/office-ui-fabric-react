import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { HoverCardPageProps } from 'office-ui-fabric-react/lib/components/HoverCard/HoverCard.doc';

export const HoverCardPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <LayerHost>
    <DemoPage {...{ ...HoverCardPageProps, ...props }} />
  </LayerHost>
);
