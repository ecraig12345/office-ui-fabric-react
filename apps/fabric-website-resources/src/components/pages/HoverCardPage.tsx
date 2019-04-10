import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { HoverCardPageProps } from 'office-ui-fabric-react/lib/components/HoverCard/HoverCard.doc';

export const HoverCardPage = (props: Partial<IDemoPageProps>) => (
  <LayerHost>
    <DemoPage {...{ ...HoverCardPageProps, ...props }} />
  </LayerHost>
);
