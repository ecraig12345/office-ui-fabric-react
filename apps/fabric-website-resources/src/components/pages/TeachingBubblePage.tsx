import * as React from 'react';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { TeachingBubblePageProps } from 'office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubble.doc';

export const TeachingBubblePage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <LayerHost>
    <DemoPage {...{ ...TeachingBubblePageProps, ...props }} />
  </LayerHost>
);
