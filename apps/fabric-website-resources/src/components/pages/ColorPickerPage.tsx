import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { ColorPickerPageProps } from 'office-ui-fabric-react/lib/components/ColorPicker/ColorPicker.doc';

export const ColorPickerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/page-json-generator/lib/pages/office-ui-fabric-react/ColorPicker.page.json')}
    {...{ ...ColorPickerPageProps, ...props }}
  />
);
