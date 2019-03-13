import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { CheckboxPageProps } from 'office-ui-fabric-react/lib/components/Checkbox/Checkbox.doc';

export const CheckboxPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...CheckboxPageProps, ...props }} />
);
