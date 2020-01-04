import * as React from 'react';
import { SwatchColorPickerBasicExample } from './examples/SwatchColorPicker.Basic.Example';
import { SwatchColorPickerControlledExample } from './examples/SwatchColorPicker.Controlled.Example';
import { SwatchColorPickerCustomExample } from './examples/SwatchColorPicker.Custom.Example';

import { IDocPageProps } from '../../common/DocPage.types';

const SwatchColorPickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/examples/SwatchColorPicker.Basic.Example.tsx') as string;
const SwatchColorPickerControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/examples/SwatchColorPicker.Controlled.Example.tsx') as string;
const SwatchColorPickerCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/examples/SwatchColorPicker.Custom.Example.tsx') as string;

export const SwatchColorPickerPageProps: IDocPageProps = {
  title: 'SwatchColorPicker',
  componentName: 'SwatchColorPicker',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/SwatchColorPicker',
  examples: [
    {
      title: 'Basic SwatchColorPickers',
      code: SwatchColorPickerBasicExampleCode,
      view: <SwatchColorPickerBasicExample />
    },
    {
      title: 'Controlled SwatchColorPicker',
      code: SwatchColorPickerControlledExampleCode,
      view: <SwatchColorPickerControlledExample />
    },
    {
      title: 'Customized SwatchColorPickers',
      code: SwatchColorPickerCustomExampleCode,
      view: <SwatchColorPickerCustomExample />
    }
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true
};
