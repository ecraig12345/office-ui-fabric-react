import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { ColorPickerPageProps } from 'office-ui-fabric-react/lib/components/ColorPicker/ColorPicker.doc';

export const ColorPickerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/ColorPicker.page.json')}
    {...{ ...ColorPickerPageProps, ...props }}
  />
);
