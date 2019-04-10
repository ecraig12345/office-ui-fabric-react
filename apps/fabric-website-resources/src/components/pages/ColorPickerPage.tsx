import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { ColorPickerPageProps } from 'office-ui-fabric-react/lib/components/ColorPicker/ColorPicker.doc';

export const ColorPickerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ColorPickerPageProps, ...props }} />;
