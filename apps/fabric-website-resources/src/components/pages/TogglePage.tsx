import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { TogglePageProps } from 'office-ui-fabric-react/lib/components/Toggle/Toggle.doc';

export const TogglePage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...TogglePageProps, ...props }} />
);
