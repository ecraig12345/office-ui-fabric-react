import * as React from 'react';
import { PageMarkdown } from '@uifabric/example-app-base';
import { Fabric } from 'office-ui-fabric-react';
import { mergeStyleSets, getTheme, DefaultFontStyles, ScreenWidthMaxLarge } from 'office-ui-fabric-react/lib/Styling';

export interface IGettingStartedPageProps {
  packageName: string;
  subtitle?: string;
}

const theme = getTheme();
const classNames = mergeStyleSets({
  root: {
    marginTop: -20,
    padding: 40,
    selectors: {
      h1: DefaultFontStyles.xxLarge,
      h2: DefaultFontStyles.xLarge,
      h3: DefaultFontStyles.large
    }
  },
  banner: {
    padding: '1px 20px',
    margin: '-20px -20px 20px -20px',
    borderBottom: '1px solid ' + theme.palette.neutralTertiaryAlt,
    selectors: {
      [`@media (max-width: ${ScreenWidthMaxLarge})`]: {
        margin: '-20px 0 20px 0'
      }
    }
  },
  title: {
    selectors: {
      h1: { marginBottom: 0 },
      h3: { marginTop: 0 }
    }
  },
  code: {
    background: theme.palette.neutralDark,
    padding: 20,
    selectors: {
      pre: {
        margin: 0
      },
      '.hljs': {
        background: 'inherit',
        padding: 0
      }
    }
  }
});

export const GettingStartedPage: React.StatelessComponent<IGettingStartedPageProps> = (props: IGettingStartedPageProps) => {
  return (
    <Fabric className={classNames.root}>
      <div className={classNames.banner}>
        <div className={classNames.title}>
          <h1>{props.packageName}</h1>
          <h3>{props.subtitle || 'A library of reusable, generic React components'}</h3>
        </div>
      </div>
      <PageMarkdown>{require<string>('!raw-loader!./docs/GettingStartedOverview.md')}</PageMarkdown>
    </Fabric>
  );
};
