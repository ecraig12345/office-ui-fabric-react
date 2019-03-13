import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { PickersPageProps } from 'office-ui-fabric-react/lib/components/pickers/Pickers.doc';

export const PickersPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...PickersPageProps, ...props }} />
);
