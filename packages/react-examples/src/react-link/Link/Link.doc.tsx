import * as React from 'react';
import { LinkBasicExample } from './Link.Basic.Example';

import { IDocPageProps } from '@fluentui/react-internal/lib/common/DocPage.types';

const LinkBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-link/Link/Link.Basic.Example.tsx') as string;

export const LinkPageProps: IDocPageProps = {
  title: 'Link',
  componentName: 'Link',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/react-link/src/components/Link',
  examples: [
    {
      title: 'Link',
      code: LinkBasicExampleCode,
      view: <LinkBasicExample />,
      styles: ({ theme }) => {
        const { semanticColors } = theme!;
      },
    },
  ],
  overview: require<string>('!raw-loader!@fluentui/react-examples/src/react-link/Link/docs/LinkOverview.md'),
  bestPractices: require<string>('!raw-loader!@fluentui/react-examples/src/react-link/Link/docs/LinkBestPractices.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
  nativePropsElement: ['a', 'button'],
};
