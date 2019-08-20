import * as React from 'react';
import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

import { UseConstValueExample } from './docs/web/examples/UseConst.Value.Example';
import { UseConstInitializerExample } from './docs/web/examples/UseConst.Initializer.Example';
import { UseIdExample } from './docs/web/examples/UseId.Example';

export const HooksPageProps: TFabricPlatformPageProps = {
  web: {
    title: 'Hooks',
    componentName: 'Hooks',
    componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/react-hooks',
    examples: [
      {
        title: 'useConst with value',
        view: <UseConstValueExample />,
        code: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/HooksPage/docs/web/examples/UseConst.Value.Example.tsx')
      },
      {
        title: 'useConst with initializer',
        view: <UseConstInitializerExample />,
        code: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/HooksPage/docs/web/examples/UseConst.Initializer.Example.tsx')
      },
      {
        title: 'useId',
        view: <UseIdExample />,
        code: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/HooksPage/docs/web/examples/UseId.Example.tsx')
      }
    ],
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/HooksPage/docs/web/HooksOverview.md') as string,
    related: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/HooksPage/docs/HooksRelated.md') as string,
    isHeaderVisible: true,
    isFeedbackVisible: true
  }
};
