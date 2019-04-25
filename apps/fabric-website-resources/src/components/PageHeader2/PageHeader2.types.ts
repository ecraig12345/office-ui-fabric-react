import { ITheme } from 'office-ui-fabric-react/lib/Styling';

/**
 * PageHeader based on HIG PageHeader.
 * Will replace ComponentPage built-in header and website PageHeader.
 */
export interface IPageHeader2Props {
  /**
   * The title of the current page.
   * @default 'Page title'
   */
  pageTitle: string;

  /**
   * The subtitle of the current page.
   */
  pageSubTitle?: string;

  className?: string;

  /** Theme provided by higher-order component. */
  theme?: ITheme;
}
