import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';
import { ISideRailLink } from '@uifabric/example-app-base/lib/components/SideRail';
import { IExampleCardProps } from '@uifabric/example-app-base';

export interface IDemoPageProps2 {
  isHeaderVisible?: boolean;
}

export interface IPageProps {
  /** Title that goes into the header. */
  title: string;

  /** Subtitle that goes into the header. */
  subTitle?: string;

  /** Class name passed to page wrapper. */
  className?: string;

  /** Class name passed to the section wrapper. */
  sectionWrapperClassName?: string;

  /** Name of the component being documented. */
  componentName?: string;

  /** URL of the checked in component or page parent folder. */
  componentUrl?: string;

  /** Optional title of the file to be passed to edit URL if different than the page title. */
  fileNamePrefix?: string;

  /** (1) Overview of the page as Markdown string */
  overview?: string;

  /** (2) Generic additional content section to appear in the page, as markdown string. */
  addlContent?: string;

  /** Optional title for the generic content section. */
  addlContentTitle?: string;

  /** (3a) Best practice as markdown string. */
  bestPractices?: string;

  /** (3b) DO's list as Markdown string. */
  dos?: string;

  /** (3c) DON'Ts list as Markdown string. */
  donts?: string;

  /** (4) The usage guidelines as Markdown string. */
  usage?: string;

  /** (5) The design guidelines as Markdown string. */
  design?: string;

  /** (6) Array of examples, displayed in the order defined. */
  examples?: IRenderedExample[];

  /** Knobs that applies to all the examples. */
  exampleKnobs?: React.ReactNode;

  /** (7) Properties table(s) as Markdown string. */
  propertiesTablesSources?: string[];

  /** For properties (implementation) section, whether the component allows native props. */
  allowNativeProps?: boolean;

  /** For properties (implementation) section, native props root element. */
  nativePropsElement?: string | string[];

  /** For properties (implementation) section, override component name to use in the native props message */
  allowNativePropsForComponentName?: string;

  /** (8) Array of custom sections. */
  otherSections?: IPageSectionProps[];

  /** (9) Whether to show the feedback section with GitHub issues. **/
  isFeedbackVisible?: JSX.Element;

  /** Related links for side rail. */
  relatedLinks?: ISideRailLink[] | string;

  /** Contact mailto links for side rail. */
  contactLinks?: ISideRailLink[] | string;

  /**
   * Whether to show the side rail.
   * @defaultvalue true
   */
  showSideRail?: boolean;

  /** Theme provided by higher-order component. */
  theme?: ITheme;

  /** Optional override styles */
  styles?: IStyleFunctionOrObject<IPageStyleProps, IPageStyles>;
}

export interface IRenderedExample extends IExampleCardProps {
  /** Rendered example */
  view: React.ReactNode;
}

export interface IPageSectionProps {
  /** The name of the section. Used to create camel case classNames and pascal case ID. */
  sectionName: string;

  /** Use when the section name and Markdown file name are different. */
  readableSectionName?: string;

  /** Content to render into the section. If a string, will be rendered as markdown. */
  content?: JSX.Element | string;

  /** Optional className for the section (in addition to the standard section styles). */
  className?: string;

  /** Custom URL for the edit button to link to. */
  editUrl?: string;

  /** Override for the auto-generated section ID. Null means don't use a section ID. */
  id?: string | null;

  /** Custom styles for the section. */
  style?: React.CSSProperties;
}

export type IPageStyleProps = Pick<IPageProps, 'theme'> & {
  isMountedOffset?: boolean;
  showSideRail?: boolean;
};

export interface IPageStyles {
  /** Page wrapper (includes header and main) */
  root: IStyle;
  /** Wrapper of content and side rail */
  main: IStyle;
  /** Wrapper of the content sections (not including the side rail) */
  sectionWrapper: IStyle;
  /** Styles for each section */
  section: IStyle;
  subSection: IStyle;
  sectionHeader: IStyle;
  /** Styles for edit button */
  edit: IStyle;
  subHeading: IStyle;
  smallSubHeading: IStyle;
  // formerly .content
  markdownContent: IStyle;
  sideRailWrapper: IStyle;
  sideRailScrollbarsView: IStyle;

  dosDontsSection: IStyle;
  /** Styles for *both* the dos/don'ts lists */
  dosDontsList: IStyle;
  /** Styles for only the do list */
  dosList: IStyle;
  /** Styles for only the don't list */
  dontsList: IStyle;

  // root: IStyle;
  // header: IStyle;
  // content: IStyle;
  // navigation: IStyle;
  // subHeading: IStyle;
  // /** Styles applied to all sections */
  // section: IStyle;
  // overviewSection: IStyle;
  // overviewText: IStyle;
  // overviewHeading: IStyle;
  // /**
  //  * Used on the actual (rarely shown) "Best Practices" part of the best practices/dos/don'ts section.
  //  * For the wrapper of both this section and the dos/don'ts, use `bestPracticesSection`.
  //  */
  // usageSection: IStyle;
  // /** Used on the actual (rarely shown) "Best Practices" heading. */
  // usageHeading: IStyle;
  // variantsSection: IStyle;
  // variantsTitle: IStyle;
  // variantsList: IStyle;
  // implementationSection: IStyle;
  // implementationExamplesSection: IStyle;
  // feedbackSection: IStyle;
  // /** Wrapper for best practices, dos, and don'ts */
  // bestPracticesSection: IStyle;
  // /** Wrapper for the dos/don'ts sections */
  // doSections: IStyle;
  // /** Used on each of the dos and don'ts sections */
  // dosDontsSection: IStyle;
  // dosDontsHeading: IStyle;
  // dosDontsLine: IStyle;
  // dosLine: IStyle;
  // dontsSection: IStyle;
  // dontsLine: IStyle;
}
