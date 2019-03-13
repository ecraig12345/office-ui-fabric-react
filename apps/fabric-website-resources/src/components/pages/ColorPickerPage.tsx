import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { ColorPickerPageProps } from 'office-ui-fabric-react/lib/components/ColorPicker/ColorPicker.doc';

export const ColorPickerPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ColorPickerPageProps, ...props }} />
);
