import * as React from 'react';

import { TextPageProps } from 'office-ui-fabric-react/lib/components/Text/Text.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

export const TextPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...TextPageProps, ...props }} />
);
