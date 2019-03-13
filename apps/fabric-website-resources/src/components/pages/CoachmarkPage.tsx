import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { CoachmarkPageProps } from 'office-ui-fabric-react/lib/components/Coachmark/Coachmark.doc';

export const CoachmarkPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...CoachmarkPageProps, ...props }} />
);
