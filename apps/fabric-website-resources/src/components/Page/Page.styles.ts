import { getTheme, IRawStyle, FontWeights, IStyleSet, IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IPageStyleProps, IPageStyles } from './Page.types';
import { appPaddingSm, appPaddingLg } from '@uifabric/example-app-base/lib/styles/constants';
import { Depths, MotionDurations, MotionTimings, FontSizes, NeutralColors } from '@uifabric/fluent-theme';

// TODO move to common location
/** Target width for content area to show large breakpoint width for examples */
const contentWidth = 1024;
const appPaddingMd = 40;
const uhfScreenMinLg = 1084;
// We want the text to appear the same distance from the body and the nav. It include 8px padding already.
const sideRailPaddingLeft = appPaddingMd - 8;
const sideRailWidth = 182 + sideRailPaddingLeft;

export const pageStyleConstants = {
  editButtonClass: 'Page-editButton',
  largeScreensSelector: `@media only screen and (min-width: ${uhfScreenMinLg}px)`,
  mdListClass: 'md-list',
  mdutFullClass: 'mdut--full',
  mdutHalfClass: 'mdut--half'
};

const pageSubHeadMargin = 20;
const dosDontsListPadding = 24;

// const globalClassNames = {
//   header: 'ComponentPage-header',
//   navigation: 'ComponentPage-navigation',
//   subHeading: 'ComponentPage-subHeading',
//   overviewSection: 'ComponentPage-overviewSection',
//   overviewText: 'ComponentPage-overview',
//   overviewHeading: 'ComponentPage-overviewSectionHeader',
//   usageSection: 'CompnentPage-usage',
//   usageHeading: 'ComponentPage-usageHeader',
//   variantsSection: 'ComponentPage-variantsSection',
//   variantsTitle: 'ComponentPage-variantsTitle',
//   variantsList: 'ComponentPage-variantsList',
//   implementationSection: 'ComponentPage-implementationSection',
//   implementationExamplesSection: 'ComponentPage-implementationExamplesSection',
//   feedbackSection: 'ComponentPage-feedbackSection',
//   bestPracticesSection: 'ComponentPage-bestPracticesSection',
//   doSections: 'ComponentPage-doSections',
//   dosDontsSection: 'ComponentPage-doSection',
//   dosDontsHeading: 'ComponentPage-doSectionHeader',
//   dosDontsLine: 'ComponentPage-doSectionLine',
//   dontsSection: 'ComponentPage-doSection--dont'
// };

// const componentPagePadding = 50;
// const ulLeftPadding = 18;

export interface IPageUtilityStyles {
  uListFlex: IStyle;
  /** formerly nested as ul.uListFlex > .uThird */
  uListFlexThird: IStyle;
  /** formerly .uListWrap */
  uListFlexWrap: IStyle;
}

export const pageUtilityStyles: IStyleSet<IPageUtilityStyles> = {
  uListFlex: {
    display: 'flex',
    paddingLeft: 0,
    marginRight: -appPaddingSm,
    marginBottom: -12,
    selectors: {
      li: {
        listStyle: 'none',
        marginRight: appPaddingSm,
        marginBottom: 12
      }
    }
  },
  uListFlexThird: {
    flexBasis: `calc(33% - ${appPaddingSm}px)`
  },
  uListFlexWrap: {
    flexWrap: 'wrap'
  }
};

export const getStyles: IStyleFunction<IPageStyleProps, IPageStyles> = props => {
  const { theme = getTheme(), isMountedOffset, showSideRail } = props;

  const subHeadingStyles: IRawStyle = {
    color: NeutralColors.gray160,
    fontWeight: FontWeights.semibold,
    lineHeight: '1', // must have quotes to prevent interpretation as px
    marginTop: 0,
    marginBottom: 0
  };

  return {
    // .Page
    root: {
      position: 'relative',
      minHeight: '100vh',
      selectors: {
        // Global styles intended to target classes defined in markdown files.
        [`:global(.${pageStyleConstants.mdListClass})`]: {
          display: 'flex',
          flexWrap: 'wrap',
          paddingLeft: 0,
          marginRight: -appPaddingSm,
          marginBottom: -12,
          selectors: {
            li: {
              listStyle: 'none',
              marginRight: appPaddingSm,
              marginBottom: 12
            },
            [`> .${pageStyleConstants.mdutFullClass}`]: {
              flexBasis: '100%',
              marginRight: 0
            },
            [`> .${pageStyleConstants.mdutHalfClass}`]: {
              flexBasis: `calc(50% - ${appPaddingSm}px)`
            }
          }
        }
      }
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      selectors: {
        [pageStyleConstants.largeScreensSelector]: {
          flexDirection: 'row'
        }
      }
    },
    sectionWrapper: {
      maxWidth: contentWidth + appPaddingSm * 2,
      selectors: {
        [pageStyleConstants.largeScreensSelector]: {
          flex: '1 auto',
          maxWidth: showSideRail ? `calc(100% - ${sideRailWidth}px)` : contentWidth + appPaddingSm * 2
        }
      }
    },
    section: [
      {
        background: theme.palette.white,
        padding: appPaddingSm,
        marginBottom: appPaddingSm,
        borderRadius: 2,
        position: 'relative',
        transition:
          `transform ${MotionDurations.duration3} ${MotionTimings.decelerate}, ` +
          `opacity ${MotionDurations.duration3} ${MotionTimings.decelerate} .05s`,
        selectors: {
          '&:last-child': {
            marginBottom: 0
          }
        }
      },
      Depths.depth4,
      isMountedOffset
        ? {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        : {
            opacity: 0,
            transform: 'translate3d(0, 48px, 0)'
          }
    ],
    subSection: {
      marginBottom: 36,
      selectors: {
        '&:last-child': {
          marginBottom: 0
        }
      }
    },
    sectionHeader: {
      marginBottom: pageSubHeadMargin,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      selectors: {
        [`&:hover .${pageStyleConstants.editButtonClass}`]: {
          opacity: '1'
        }
      }
    },
    edit: [
      {
        opacity: '0',
        transition: 'opacity .2s ease',
        selectors: {
          '&:hover, &:focus, &:focus-within': {
            opacity: '1'
          },
          'a:global(.ms-Button)': {
            height: 20
          }
        }
      },
      pageStyleConstants.editButtonClass
    ],
    subHeading: [
      {
        fontSize: FontSizes.size24
      },
      subHeadingStyles
    ],
    smallSubHeading: [
      {
        fontSize: FontSizes.size20
      },
      subHeadingStyles
    ],
    markdownContent: {
      selectors: {
        'p, ol, ul': {
          fontSize: FontSizes.size16
        },
        p: {
          marginBottom: 12,
          selectors: {
            '&:last-child': {
              marginBottom: 0
            }
          }
        },
        'ol, ul': {
          paddingLeft: 20
        },
        'ul li': {
          listStyle: 'disc',
          selectors: {
            ul: {
              paddingTop: 8
            },
            'ul li': {
              listStyleType: 'circle'
            }
          }
        },
        li: {
          marginBottom: 8
        }
      }
    },
    sideRailWrapper: {
      marginTop: appPaddingMd,
      selectors: {
        [pageStyleConstants.largeScreensSelector]: {
          marginTop: 0,
          paddingLeft: sideRailPaddingLeft,
          width: sideRailWidth
        }
      }
    },
    sideRailScrollbarsView: {
      // Disable scrollable area at smaller screen sizes.
      position: 'relative !important' as any, // scrollbars sets position via style prop.
      overflow: 'auto !important' as any, // scrollbars sets overflow via style prop.
      selectors: {
        [pageStyleConstants.largeScreensSelector]: {
          position: 'absolute !important' as any,
          overflow: 'scroll !important' as any,
          selectors: {
            // TODO: IE doesn't support @supports, but it also doesn't support sticky, so...works out?
            '@supports (position: sticky)': {
              position: 'sticky',
              height: `calc(100vh - ${appPaddingLg}px)`,
              top: appPaddingLg
            }
          }
        }
      }
    },
    dosDontsSection: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'inline-block',
      verticalAlign: 'top',
      marginBottom: 20,
      selectors: {
        [pageStyleConstants.largeScreensSelector]: {
          marginBottom: -10, // trim last list item
          width: `calc(50% - ${appPaddingSm / 2}px)`,
          selectors: {
            '&:first-child': {
              marginRight: appPaddingSm
            }
          }
        }
      }
    },
    dosDontsList: {
      selectors: {
        ul: {
          paddingLeft: dosDontsListPadding,
          selectors: {
            '> li': {
              fontSize: 14,
              listStyle: 'none !important',
              marginBottom: 20,
              position: 'relative',
              selectors: {
                '&:before': {
                  content: '" "',
                  fontFamily: 'FabricMDL2Icons',
                  display: 'block',
                  position: 'absolute',
                  top: 1,
                  left: dosDontsListPadding
                },
                'ul li': {
                  fontSize: 14,
                  listStyle: 'circle',
                  marginBottom: 0
                }
              }
            }
          }
        }
      }
    },
    dosList: {
      selectors: {
        'ul > li:before': {
          content: 'E8FB', // 'Accept' fabric icon
          color: theme.palette.green
        }
      }
    },
    dontsList: {
      selectors: {
        'ul > li:before': {
          content: 'E711', // 'Cancel' fabric icon
          color: theme.palette.red
        }
      }
    }
    // navigation: globalClassNames.navigation,
    // subHeading: [
    //   {
    //     // Set margins on the heading container not heading text to fix vertical alignment on sections
    //     // with an edit button
    //     marginTop: 0,
    //     marginBottom: 24,
    //     selectors: {
    //       // Set font here to be more specific
    //       h2: [theme.fonts.xxLarge, { fontSize: 36, margin: 0 }]
    //     }
    //   },
    //   globalClassNames.subHeading
    // ],
    // overviewSection: [
    //   {
    //     maxWidth: '60em'
    //   },
    //   globalClassNames.overviewSection
    // ],
    // overviewText: [
    //   {
    //     fontSize: theme.fonts.medium.fontSize,
    //     // This is meant to be a ratio, so it has to be in quotes so it's not interpreted as pixels
    //     lineHeight: '1.5',
    //     marginBottom: -6, // Trim padding off last paragraph
    //     selectors: {
    //       p: {
    //         margin: 0,
    //         padding: '16px 0'
    //       },
    //       ul: { paddingLeft: ulLeftPadding },
    //       li: [
    //         theme.fonts.medium,
    //         {
    //           marginBottom: 16
    //         }
    //       ],
    //       'ul li': { listStyle: 'disc' }
    //     }
    //   },
    //   globalClassNames.overviewText
    // ],
    // overviewHeading: [
    //   {
    //     selectors: {
    //       [`&.${globalClassNames.subHeading}`]: {
    //         marginTop: 0
    //       }
    //     }
    //   },
    //   globalClassNames.overviewHeading
    // ],
    // // These are for the actual "Best Practices" heading/text (rarely shown).
    // // The wrapper for this section plus dos/don'ts is bestPracticesSection.
    // usageSection: [
    //   {
    //     marginBottom: 16
    //   },
    //   globalClassNames.usageSection
    // ],
    // usageHeading: globalClassNames.usageHeading,
    // variantsSection: globalClassNames.variantsSection,
    // variantsTitle: globalClassNames.variantsTitle,
    // variantsList: [
    //   {
    //     paddingLeft: ulLeftPadding,
    //     selectors: {
    //       li: { listStyle: 'disc' }
    //     }
    //   },
    //   globalClassNames.variantsList
    // ],
    // implementationSection: globalClassNames.implementationSection,
    // implementationExamplesSection: globalClassNames.implementationExamplesSection,
    // feedbackSection: globalClassNames.feedbackSection,
    // bestPracticesSection: [
    //   {
    //     backgroundColor: theme.palette.neutralLighterAlt
    //   },
    //   globalClassNames.bestPracticesSection
    // ],
    // doSections: globalClassNames.doSections,
    // dosDontsSection: [
    //   {
    //     width: '100%',
    //     boxSizing: 'border-box',
    //     display: 'inline-block',
    //     verticalAlign: 'top',
    //     marginBottom: 20,
    //     selectors: {
    //       ul: { paddingLeft: ulLeftPadding },
    //       li: {
    //         listStyle: 'disc',
    //         marginBottom: 20,
    //         selectors: {
    //           'ul li': {
    //             listStyle: 'circle',
    //             marginBottom: 0
    //           }
    //         }
    //       },
    //       '&:first-child': { marginRight: 120 },
    //       [`@media screen and (min-width: ${ScreenWidthMinUhfMobile}px)`]: {
    //         marginBottom: -10, // Trim last list item
    //         width: 'calc(50% - 60px)'
    //       }
    //     }
    //   },
    //   globalClassNames.dosDontsSection
    // ],
    // dosDontsHeading: [
    //   {
    //     selectors: {
    //       h3: [theme.fonts.xLarge, { margin: 0 }]
    //     }
    //   },
    //   globalClassNames.dosDontsHeading
    // ],
    // dosDontsLine: [
    //   {
    //     borderRadius: 3,
    //     display: 'block',
    //     height: 8,
    //     margin: '12px 0 40px',
    //     border: 0
    //   },
    //   globalClassNames.dosDontsLine
    // ],
    // dosLine: {
    //   backgroundColor: '#a4cf0c'
    // },
    // dontsLine: {
    //   backgroundColor: '#e74856'
    // },
    // dontsSection: globalClassNames.dontsSection
  };
};
