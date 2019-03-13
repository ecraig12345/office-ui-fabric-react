import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { OverlayPageProps } from 'office-ui-fabric-react/lib/components/Overlay/Overlay.doc';

export const OverlayPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...OverlayPageProps, ...props }} />
);
