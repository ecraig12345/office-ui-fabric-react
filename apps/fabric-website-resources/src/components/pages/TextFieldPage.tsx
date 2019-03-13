import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { TextFieldPageProps } from 'office-ui-fabric-react/lib/components/TextField/TextField.doc';

export const TextFieldPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...TextFieldPageProps, ...props }} />
);
