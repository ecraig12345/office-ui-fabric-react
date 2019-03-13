import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { SelectionPageProps } from 'office-ui-fabric-react/lib/utilities/selection/Selection.doc';

export const SelectionPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...SelectionPageProps, ...props }} />
);
