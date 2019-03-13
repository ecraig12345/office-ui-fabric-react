import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { FocusTrapZonePageProps } from 'office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.doc';

export const FocusTrapZonePage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...FocusTrapZonePageProps, ...props }} />
);
