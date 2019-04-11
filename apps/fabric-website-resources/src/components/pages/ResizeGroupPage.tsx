import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { ResizeGroupPageProps } from 'office-ui-fabric-react/lib/components/ResizeGroup/ResizeGroup.doc';

export const ResizeGroupPage = (props: Partial<IDemoPageProps>) => (
  <LayerHost>
    <DemoPage {...{ ...ResizeGroupPageProps, ...props }} />
  </LayerHost>
);
