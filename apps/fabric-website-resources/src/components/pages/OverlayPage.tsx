import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { OverlayPageProps } from 'office-ui-fabric-react/lib/components/Overlay/Overlay.doc';

export const OverlayPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Overlay.page.json')}
    {...{ ...OverlayPageProps, ...props }}
  />
);
