import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { FocusZonePageProps } from 'office-ui-fabric-react/lib/components/FocusZone/FocusZone.doc';

export const FocusZonePage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...FocusZonePageProps, ...props }} />
);
