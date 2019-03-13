import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { MarqueeSelectionPageProps } from 'office-ui-fabric-react/lib/components/MarqueeSelection/MarqueeSelection.doc';

export const MarqueeSelectionPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...MarqueeSelectionPageProps, ...props }} />
);
