import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { ComboBoxPageProps } from 'office-ui-fabric-react/lib/components/ComboBox/ComboBox.doc';

export const ComboBoxPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ComboBoxPageProps, ...props }} />
);
