import * as React from 'react';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { TooltipPageProps } from 'office-ui-fabric-react/lib/components/Tooltip/Tooltip.doc';

export const TooltipPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <LayerHost>
    <DemoPage {...{ ...TooltipPageProps, ...props }} />
  </LayerHost>
);
