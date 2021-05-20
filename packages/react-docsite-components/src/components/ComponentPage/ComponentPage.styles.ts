import { ScreenWidthMinUhfMobile, getTheme, getScreenSelector } from '@fluentui/react/lib/Styling';
import { IStyleFunction } from '@fluentui/react/lib/Utilities';
import { ScreenWidthMaxLarger, ScreenWidthMaxUhfMobile } from '../../styles/constants';
import { IComponentPageStyleProps, IComponentPageStyles } from './ComponentPage.types';

const globalClassNames = {
  root: 'ComponentPage',
  body: 'ComponentPage-body',
  header: 'ComponentPage-header',
  headerLink: 'ComponentPage-navLink',
  title: 'ComponentPage-title',
  navigation: 'ComponentPage-navigation',
  subHeading: 'ComponentPage-subHeading',
  overviewSection: 'ComponentPage-overviewSection',
  overviewHeading: 'ComponentPage-overviewSectionHeader',
  usageSection: 'CompnentPage-usage',
  usageHeading: 'ComponentPage-usageHeader',
  variantsSection: 'ComponentPage-variantsSection',
  variantsTitle: 'ComponentPage-variantsTitle',
  variantsList: 'ComponentPage-variantsList',
  implementationSection: 'ComponentPage-implementationSection',
  feedbackSection: 'ComponentPage-feedbackSection',
  bestPracticesSection: 'ComponentPage-bestPracticesSection',
  doSections: 'ComponentPage-doSections',
  dosDontsSection: 'ComponentPage-doSection',
  dosDontsHeading: 'ComponentPage-doSectionHeader',
  dosDontsLine: 'ComponentPage-doSectionLine',
  dontsSection: 'ComponentPage-doSection--dont',
};

const componentPageColor = '#0f8387';
const componentPagePadding = 50;
const componentPagePaddingLarge = 30;
const componentPagePaddingMobile = 20;

/** `< 768px` */
const mobileOnlyQuery = getScreenSelector(undefined, ScreenWidthMaxUhfMobile);
/** `768px <= width < 1200px` */
const largerOnlyQuery = getScreenSelector(ScreenWidthMinUhfMobile, ScreenWidthMaxLarger);

export const getStyles: IStyleFunction<IComponentPageStyleProps, IComponentPageStyles> = props => {
  const { theme = getTheme(), title = '' } = props;
  const mobileTitleSizeMultiplier = title.length > 14 ? 0.75 : 1;
  return {
    body: globalClassNames.body,
    root: [
      {
        backgroundColor: theme.palette.white,
        overflow: 'hidden',
      },
      globalClassNames.root,
    ],
    header: [
      {
        backgroundColor: componentPageColor,
        // maxWidth: '100%',
        padding: componentPagePadding,
        paddingBottom: 0,
        [mobileOnlyQuery]: {
          padding: componentPagePaddingMobile,
          paddingBottom: 0,
        },
        [largerOnlyQuery]: {
          padding: componentPagePaddingLarge,
          paddingBottom: 0,
        },
      },
      globalClassNames.header,
    ],
    headerLink: [
      theme.fonts.medium,
      {
        color: theme.palette.white,
        textDecoration: 'none',
        display: 'inline-block',
        paddingRight: 40,
        paddingBottom: '2em',
        '&:hover': { color: theme.palette.neutralLight },
        [mobileOnlyQuery]: {
          paddingRight: 20,
          paddingBottom: '1em',
        },
      },
      globalClassNames.headerLink,
    ],
    title: [
      theme.fonts.xLarge,
      {
        fontSize: 82,
        lineHeight: 94,
        color: theme.palette.white,
        display: 'inline-block',
        width: '100%',
        // long titles (including long single-word component names) must wrap, not disappear
        overflowWrap: 'break-word',
        marginTop: componentPagePadding,
        marginBottom: componentPagePadding,
        [mobileOnlyQuery]: {
          // reduce likelihood of long titles wrapping
          fontSize: 36 * mobileTitleSizeMultiplier,
          lineHeight: 48 * mobileTitleSizeMultiplier,
          marginTop: componentPagePaddingMobile,
          marginBottom: componentPagePaddingMobile,
        },
        [largerOnlyQuery]: {
          fontSize: 60,
          lineHeight: 72,
          marginTop: componentPagePaddingLarge,
          marginBottom: componentPagePaddingLarge,
        },
      },
      globalClassNames.title,
    ],
    navigation: globalClassNames.navigation,
    subHeading: [
      {
        // Set margins on the heading container not heading text to fix vertical alignment on sections
        // with an edit button
        marginTop: 0,
        marginBottom: 24,
        selectors: {
          // Set font here to be more specific
          h2: [theme.fonts.xLarge, { fontSize: 36, margin: 0 }],
          [mobileOnlyQuery]: {
            marginBottom: 12,
            h2: { fontSize: 24 },
          },
          [largerOnlyQuery]: {
            marginBottom: 16,
            h2: { fontSize: 28 },
          },
        },
      },
      globalClassNames.subHeading,
    ],
    section: {
      padding: componentPagePadding,
      [mobileOnlyQuery]: {
        padding: componentPagePaddingMobile,
      },
      [largerOnlyQuery]: {
        padding: componentPagePaddingLarge,
      },
    },
    overviewSection: [
      {
        maxWidth: '60em',
      },
      globalClassNames.overviewSection,
    ],
    overviewHeading: [
      {
        selectors: {
          [`&.${globalClassNames.subHeading}`]: {
            marginTop: 0,
          },
        },
      },
      globalClassNames.overviewHeading,
    ],
    // These are for the actual "Best practices" heading/text.
    // The wrapper for this section plus dos/don'ts is bestPracticesSection.
    usageSection: [
      {
        marginBottom: 16,
      },
      globalClassNames.usageSection,
    ],
    usageHeading: globalClassNames.usageHeading,
    variantsSection: globalClassNames.variantsSection,
    variantsTitle: globalClassNames.variantsTitle,
    implementationSection: globalClassNames.implementationSection,
    feedbackSection: globalClassNames.feedbackSection,
    bestPracticesSection: [
      {
        backgroundColor: theme.palette.neutralLighterAlt,
      },
      globalClassNames.bestPracticesSection,
    ],
    doSections: globalClassNames.doSections,
    dosDontsSection: [
      {
        width: '100%',
        boxSizing: 'border-box',
        display: 'inline-block',
        verticalAlign: 'top',
        marginBottom: 20,
        selectors: {
          ul: { paddingLeft: 18 },
          li: {
            listStyle: 'disc',
            marginBottom: 20,
            selectors: {
              'ul li': {
                listStyle: 'circle',
                marginBottom: 0,
              },
              [mobileOnlyQuery]: {
                marginBottom: 10,
              },
              [largerOnlyQuery]: {
                marginBottom: 15,
              },
            },
          },
          '&:first-child': { marginRight: 120 },
          [`@media screen and (min-width: ${ScreenWidthMinUhfMobile}px)`]: {
            marginBottom: -10, // Trim last list item
            width: 'calc(50% - 60px)',
          },
        },
      },
      globalClassNames.dosDontsSection,
    ],
    dosDontsHeading: [
      {
        selectors: {
          h3: [theme.fonts.mediumPlus, { margin: 0 }],
        },
      },
      globalClassNames.dosDontsHeading,
    ],
    dosDontsLine: [
      {
        borderRadius: 3,
        display: 'block',
        height: 8,
        margin: '12px 0 40px',
        border: 0,
        [mobileOnlyQuery]: {
          height: 4,
          margin: '8px 0 20px',
        },
        [largerOnlyQuery]: {
          height: 6,
          margin: '10px 0 20px',
        },
      },
      globalClassNames.dosDontsLine,
    ],
    dosLine: {
      backgroundColor: '#a4cf0c',
    },
    dontsLine: {
      backgroundColor: '#e74856',
    },
    dontsSection: globalClassNames.dontsSection,
  };
};
