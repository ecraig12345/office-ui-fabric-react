import * as React from 'react';
import { IPageHeader2Props } from './PageHeader2.types';
import { css, mergeStyleSets, ScreenWidthMinUhfMobile, FontWeights } from 'office-ui-fabric-react';
import { FontSizes } from '@uifabric/fluent-theme';
import { appPaddingSm, appPaddingLg, pageHeaderFullHeight } from '@uifabric/example-app-base/lib/styles/constants';

export const PageHeader2: React.StatelessComponent<IPageHeader2Props> = props => {
  const { pageTitle = 'Page title', pageSubTitle, theme } = props;

  const palette = theme!.palette;
  const styles = mergeStyleSets({
    root: {
      position: 'relative',
      marginBottom: appPaddingSm,
      selectors: {
        [`@media screen and (min-width: ${ScreenWidthMinUhfMobile}px)`]: {
          marginBottom: 0,
          padding: `${appPaddingLg}px 0`,
          minHeight: pageHeaderFullHeight
        }
      }
    },
    title: {
      alignItems: 'baseline',
      color: palette.neutralPrimary,
      display: 'flex',
      fontSize: FontSizes.size32,
      fontWeight: FontWeights.semibold,
      lineHeight: '1', // must have quotes to prevent interpretation as px
      margin: 0
    },
    subTitle: {
      marginLeft: '1em',
      fontSize: FontSizes.size14,
      fontWeight: FontWeights.regular,
      color: palette.neutralSecondary
    }
  });

  return (
    <header className={css(styles.root, props.className)}>
      <h1 className={styles.title}>
        {pageTitle}
        {pageSubTitle && <span className={styles.subTitle}>{pageSubTitle}</span>}
      </h1>
    </header>
  );
};
