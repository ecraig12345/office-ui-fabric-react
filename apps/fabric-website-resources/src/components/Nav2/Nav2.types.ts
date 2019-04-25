import * as React from 'react';
import { INavProps as IBaseNavProps, INavPage as IBaseNavPage } from '@uifabric/example-app-base/lib/components/Nav/index';

/**
 * Props for the nav.
 * TPlatform can be an enum type and is expected to contain the key `default`.
 */
export interface INav2Props extends IBaseNavProps {
  /**
   * A collection of link groups to display in the navigation bar
   */
  pages: INav2Page[];

  /**
   * Function callback invoked when a link in the navigation is clicked
   */
  onLinkClick?: (ev?: React.MouseEvent<HTMLElement>) => void;

  /**
   * Function callback invoked when search box the navigation is clicked
   */
  onSearchBoxClick?: (ev?: React.MouseEvent<HTMLElement>) => void;

  searchablePageTitle?: string;
}

export interface INav2Page extends IBaseNavPage {
  /**
   * The page's title, as shown in the navigation.
   */
  title: string;

  /**
   * URL for this page, relative to the site's root.
   */
  url: string;

  /**
   * Optional array of child pages belonging to this one.
   */
  pages?: INav2Page[];

  /**
   * Unique CSS class name for this page.
   */
  className?: string;

  /**
   * The component to render for this page's content.
   */
  // tslint:disable-next-line no-any
  component?: any;

  /**
   *  Loads the component using require.ensure;
   */
  // tslint:disable-next-line no-any
  getComponent?: (cb: (obj: any) => void) => any;

  /**
   * Whether this page should be hidden from the main nav.
   */
  isHiddenFromMainNav?: boolean;

  /**
   * Whether this is the home page.
   * @default false
   */
  isHomePage?: boolean;

  /**
   * Whether this link appears in the UHF header nav.
   * This flag is different from isHiddenFromMainNav because we want the UHF link's childLinks to be rendered.
   * isHiddenFromMainNav will not render childLinks.
   * @default false
   */
  isUhfLink?: boolean;

  /**
   * Determines if the page renders as a Collapsible Section or Link in the nav.
   */
  isCategory?: boolean;

  /**
   * Determines whether the nav renders the search bar.
   */
  isSearchable?: boolean;

  /**
   * Determines whether the nav should render to make room for the content to take the
   * full width of the page.
   */
  isContentFullBleed?: boolean;
}

export enum NavSortType {
  alphabetized = 'alphabetized',
  categories = 'categories'
}
