import * as React from 'react';
import { INavPage, LoadingComponent } from '@fluentui/react-docsite-components';

export const controlsPagesWindows: INavPage[] = [
  {
    title: 'Controls',
    url: '#/controls/windows',
    isHiddenFromMainNav: true,
    component: () => <LoadingComponent title="Controls" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../../pages/Overviews/ControlsPage/ControlsPage').ControlsPage),
      ),
  },
];
