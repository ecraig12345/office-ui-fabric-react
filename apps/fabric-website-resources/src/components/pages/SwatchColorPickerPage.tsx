import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { SwatchColorPickerPageProps } from 'office-ui-fabric-react/lib/components/SwatchColorPicker/SwatchColorPicker.doc';

export const SwatchColorPickerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SwatchColorPickerPageProps, ...props }} />;
