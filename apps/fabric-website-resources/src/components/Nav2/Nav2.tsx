import * as React from 'react';
import { CollapsibleSection } from '@uifabric/experiments/lib/components/CollapsibleSection/index';
import {
  css,
  FocusZone,
  IButtonStyles,
  IIconProps,
  IconButton,
  ISearchBoxStyles,
  Link,
  SearchBox,
  getFocusStyle
} from 'office-ui-fabric-react';
import { isPageActive, hasActiveChild } from '@uifabric/example-app-base/lib/utilities/index';
import { theme } from '../../styles/theme';
import { INav2Page, INav2Props, NavSortType } from './Nav2.types';
import * as styles from './Nav2.module.scss';

export interface INavState {
  searchQuery: string;
  defaultSortState: keyof typeof NavSortType;
  sortState: keyof typeof NavSortType;
  collapsedSections: {
    [sectionKey: string]: boolean;
  };
}

export interface INavLocalItems {
  defaultSortState?: NavSortType;
}

export class Nav extends React.Component<INav2Props, INavState> {
  private _localItems: INavLocalItems;

  public constructor(props: INav2Props) {
    super(props);

    try {
      this._localItems = {
        defaultSortState: NavSortType[localStorage.getItem('defaultSortState') as keyof typeof NavSortType]
      };
    } catch (ex) {
      this._localItems = {};
    }

    this.state = {
      collapsedSections: {},
      defaultSortState: this._localItems.defaultSortState ? NavSortType[this._localItems.defaultSortState] : NavSortType.categories,
      searchQuery: '',
      sortState: this._localItems.defaultSortState ? NavSortType[this._localItems.defaultSortState] : NavSortType.categories
    };
  }

  public componentDidMount(): void {
    try {
      !this._localItems.defaultSortState && localStorage.setItem('defaultSortState', this.state.defaultSortState);
    } catch (ex) {
      // ignore
    }
  }

  public shouldComponentUpdate(nextProps: INav2Props): boolean {
    if (nextProps.pages !== this.props.pages) {
      this.setState({
        searchQuery: '',
        sortState: this.state.defaultSortState
      });
    }
    return true;
  }

  public render(): JSX.Element | null {
    const { pages } = this.props;
    if (!pages) {
      return null;
    }

    return <div className={styles.navWrapper}>{this._renderPageNav(pages)}</div>;
  }

  private _renderPageNav = (pages: INav2Page[]): JSX.Element => {
    const { searchablePageTitle } = this.props;
    const { sortState } = this.state;
    let list: JSX.Element;
    if (sortState === NavSortType.alphabetized && searchablePageTitle) {
      list = this._renderSortedLinks(pages);
    } else {
      list = this._renderLinkList(pages, false);
    }

    return (
      <>
        {searchablePageTitle && this._renderSearchBox(searchablePageTitle)}
        <FocusZone>
          <nav className={styles.nav} role="navigation">
            {list}
          </nav>
        </FocusZone>
      </>
    );
  };

  private _renderLinkList = (pages: INav2Page[], isSubMenu: boolean): JSX.Element => {
    const { sortState } = this.state;

    const list = pages
      .filter((page: INav2Page) => !page.isHiddenFromMainNav)
      .map((page: INav2Page, linkIndex: number) => {
        if (page.isCategory && page.isSearchable && sortState === NavSortType.alphabetized) {
          return page.pages!.map((innerPage: INav2Page, innerLinkIndex: number) => this._renderLink(innerPage, innerLinkIndex));
        } else if (page.isCategory) {
          return this._renderSection(page, linkIndex);
        }
        return this._renderLink(page, linkIndex);
      });

    return (
      <ul className={css(styles.links, isSubMenu && styles.isSubMenu)} aria-label="Main website navigation">
        {list}
      </ul>
    );
  };

  private _renderLink = (page: INav2Page, linkIndex: number): JSX.Element => {
    const { searchQuery } = this.state;
    const childLinks = page.pages ? this._renderLinkList(page.pages, true) : null;
    const ariaLabel = page.pages ? 'Hit enter to open sub menu, tab to access sub menu items.' : '';
    const title = page.title === 'Fabric' ? 'Home page' : page.title;
    const searchRegEx = new RegExp(searchQuery, 'i');
    const text = page.title;
    let linkText = <>{text}</>;

    // Highlight search query within link.
    if (!!searchQuery) {
      const matchIndex = text.toLowerCase().indexOf(searchQuery.toLowerCase());
      if (matchIndex >= 0) {
        const before = text.slice(0, matchIndex);
        const match = text.slice(matchIndex, matchIndex + searchQuery.length);
        const after = text.slice(matchIndex + searchQuery.length);
        const highlightMatch = <span className={styles.matchesFilter}>{match}</span>;
        linkText = (
          <>
            {before}
            {highlightMatch}
            {after}
          </>
        );
      }
    }

    return (
      <li
        className={css(
          styles.link,
          isPageActive(page.url) && styles.isActive,
          hasActiveChild(page) && styles.hasActiveChild,
          page.isHomePage && styles.isHomePage
        )}
        key={linkIndex}
      >
        {!(page.isUhfLink && location.hostname !== 'localhost') && searchRegEx.test(page.title) && (
          <Link href={page.url} onClick={this._onLinkClick} title={title} aria-label={ariaLabel}>
            {linkText}
          </Link>
        )}

        {childLinks}
      </li>
    );
  };

  private _onLinkClick = (ev: React.MouseEvent<HTMLElement>) => {
    if (this.props.onLinkClick) {
      return this.props.onLinkClick(ev);
    }
    this.setState({
      searchQuery: ''
    });
  };

  private _renderSection = (page: INav2Page, sectionIndex: number) => {
    if (page.isCategory && page.pages && this._hasMatchChild(page)) {
      const key = `${page.title}-${sectionIndex}`;
      return (
        <div key={key} className={css(styles.section, hasActiveChild(page) && styles.hasActiveChild)}>
          <CollapsibleSection
            defaultCollapsed={!hasActiveChild(page)}
            collapsed={!(this.state.collapsedSections[key] || hasActiveChild(page))}
            title={{
              text: page.title,
              onClick: () => this._handleSectionClick(key)
            }}
          >
            {this._renderLinkList(page.pages, false)}
          </CollapsibleSection>
        </div>
      );
    }
  };

  private _handleSectionClick = (sectionKey: string) => {
    const collapsedSections = { ...this.state.collapsedSections };
    this.setState((prevState: INavState) => ({
      collapsedSections: {
        ...collapsedSections,
        [sectionKey]: !prevState.collapsedSections[sectionKey]
      }
    }));
  };

  private _renderSortedLinks(pages: INav2Page[]): React.ReactElement<{}> {
    const flatten = (pgs: INav2Page[]): INav2Page[] => {
      let links: INav2Page[] = [];
      pgs.forEach((page: INav2Page) => {
        if (!page.isCategory) {
          links.push(page);
        }
        if (page.pages) {
          links = links.concat(flatten(page.pages));
        }
      });
      return links;
    };
    const flatLinks = flatten(pages);
    flatLinks.sort((a: INav2Page, b: INav2Page) => {
      // Casing can affect sorting, so convert to lower case.
      const titleA = a.title.toLocaleLowerCase();
      const titleB = b.title.toLocaleLowerCase();
      if (titleA > titleB) {
        return 1;
      }
      if (titleA < titleB) {
        return -1;
      }
      return 0;
    });

    return this._renderLinkList(flatLinks, false);
  }

  private _renderSearchBox = (pageTitle: string) => {
    const { searchQuery, defaultSortState } = this.state;

    const searchBoxStyles: ISearchBoxStyles = {
      iconContainer: {
        marginRight: 8
      }
    };

    const sortButtonStyles: IButtonStyles = {
      root: {
        ...getFocusStyle(theme, 1)
      },
      rootExpanded: {
        background: theme.palette.neutralLighter
      },
      icon: {
        position: 'absolute',
        margin: 0
      }
    };

    const menuIconProps: IIconProps = {
      styles: {
        root: { fontSize: 16 }
      }
    };

    return (
      <div className={styles.searchBoxWrapper}>
        <SearchBox
          className={styles.searchBox}
          placeholder={`Search ${pageTitle}`}
          value={searchQuery}
          onChange={this._onSearchQueryChanged}
          onClick={this._onSearchBoxClick}
          underlined={true}
          styles={searchBoxStyles}
        />
        <IconButton
          className={styles.filterButton}
          title="Sort list"
          iconProps={{
            iconName:
              defaultSortState === NavSortType.alphabetized
                ? 'Ascending'
                : defaultSortState === NavSortType.categories
                ? 'GroupedList'
                : undefined
          }}
          styles={sortButtonStyles}
          menuIconProps={{ iconName: '' }}
          menuProps={{
            items: [
              {
                key: 'categories',
                text: 'Categories',
                iconProps: { iconName: 'GroupedList', ...menuIconProps },
                onClick: this._setSortTypeCategories
              },
              {
                key: 'alphabetized',
                text: 'Alphabetical',
                iconProps: { iconName: 'Ascending', ...menuIconProps },
                onClick: this._setSortTypeAlphabetized
              }
            ]
          }}
        />
      </div>
    );
  };

  private _onSearchBoxClick = (ev: React.MouseEvent<HTMLElement>): void => {
    if (this.props.onSearchBoxClick) {
      this.props.onSearchBoxClick(ev);
    }
  };

  private _onSearchQueryChanged = (newValue: string) => {
    this.setState(
      {
        searchQuery: newValue,
        sortState: NavSortType.alphabetized
      },
      () => {
        if (this.state.searchQuery === '') {
          this.setState({
            sortState: this.state.defaultSortState
          });
        }
      }
    );
  };

  private _hasMatchChild = (page: INav2Page): boolean => {
    const { searchQuery } = this.state;
    const searchRegEx = new RegExp(searchQuery, 'i');
    let hasMatchChild: boolean = searchRegEx.test(page.title);

    if (page.pages) {
      page.pages.forEach((childPage: INav2Page) => {
        if (searchRegEx.test(childPage.title)) {
          hasMatchChild = true;
        }

        if (childPage.pages) {
          childPage.pages.forEach((grandchildPage: INav2Page) => {
            if (searchRegEx.test(grandchildPage.title)) {
              hasMatchChild = true;
            }
          });
        }
      });
    }

    return hasMatchChild;
  };

  private _setSortTypeCategories = (): void => {
    this.setState(
      {
        defaultSortState: NavSortType.categories,
        sortState: NavSortType.categories
      },
      () => {
        localStorage.setItem('defaultSortState', NavSortType[NavSortType.categories]);
      }
    );
  };

  private _setSortTypeAlphabetized = (): void => {
    this.setState(
      {
        defaultSortState: NavSortType.alphabetized,
        sortState: NavSortType.alphabetized
      },
      () => {
        localStorage.setItem('defaultSortState', NavSortType[NavSortType.alphabetized]);
      }
    );
  };
}
