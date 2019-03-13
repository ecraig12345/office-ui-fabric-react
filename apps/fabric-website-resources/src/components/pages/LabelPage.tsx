import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { LabelPageProps } from 'office-ui-fabric-react/lib/components/Label/Label.doc';

export const LabelPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...LabelPageProps, ...props }} />
);
