import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { LayerPageProps } from 'office-ui-fabric-react/lib/components/Layer/Layer.doc';

export const LayerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...LayerPageProps, ...props }} />
);
