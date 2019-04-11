import * as React from 'react';
import { LayerHost } from 'office-ui-fabric-react/lib/Layer';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { TooltipPageProps } from 'office-ui-fabric-react/lib/components/Tooltip/Tooltip.doc';

export const TooltipPage = (props: Partial<IDemoPageProps>) => (
  <LayerHost>
    <DemoPage {...{ ...TooltipPageProps, ...props }} />
  </LayerHost>
);
