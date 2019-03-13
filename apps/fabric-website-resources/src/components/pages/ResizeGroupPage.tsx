import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { ResizeGroupPageProps } from 'office-ui-fabric-react/lib/components/ResizeGroup/ResizeGroup.doc';

export const ResizeGroupPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <LayerHost>
    <DemoPage {...{ ...ResizeGroupPageProps, ...props }} />
  </LayerHost>
);
