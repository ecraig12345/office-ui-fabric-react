import * as React from 'react';
import { css, FocusZone, EventGroup, IconButton, Panel, PanelType } from 'office-ui-fabric-react';
import { UHFBreakPoints } from '../../utilities/WindowWidthUtility';
import { INavPage } from '../Nav/Nav.types';
import { ITopNavProps } from './TopNav.types';
import * as stylesImport from './TopNav.module.scss';
const styles: any = stylesImport;

export interface ITopNavState {
  isNavOpen: boolean;
  isSmallScreen?: boolean;
}

// Timer used to throttle resize events.
let resizeTimer: any;

export class TopNavBase extends React.Component<ITopNavProps, ITopNavState> {
  private _events: EventGroup;

  constructor(props: ITopNavProps) {
    super(props);

    this._events = new EventGroup(this);
    this.state = {
      isNavOpen: false
    };
  }

  public render() {
    const { isSmallScreen, isNavOpen } = this.state;
    const { pages } = this.props;

    return (
      <FocusZone className={styles.topNavWrapper}>
        <nav className={css(styles.topNav)} role="navigation">
          {isSmallScreen && (
            <>
              <IconButton
                className={styles.mobileMenuButton}
                iconProps={{
                  iconName: 'GlobalNavButton',
                  styles: {
                    root: {
                      fontSize: 20 // Matches UHF menu
                    }
                  }
                }}
                onClick={this._openNavPanel}
              />
              {this._renderMicrosoftLogo()}
              <Panel
                className="ms-App-topNavPanel"
                isOpen={isNavOpen}
                isLightDismiss={true}
                type={PanelType.smallFixedNear}
                onDismiss={this._closeNavPanel}
              >
                <FocusZone>{this._renderLinkList(pages, true)}</FocusZone>
              </Panel>
            </>
          )}

          {!isSmallScreen && (
            <>
              <div className={styles.homeLinkSection}>{this._renderHomeLink()}</div>
              <div className={styles.linkListSection}>{this._renderLinkList(pages)}</div>
            </>
          )}
        </nav>
      </FocusZone>
    );
  }

  public componentDidMount(): void {
    this._events.on(window, 'resize', this._onWindowResize);
    this._events.on(window, 'hashchange', this._closeNavPanel);

    this._onWindowResize();
  }

  public componentWillUnmount(): void {
    this._events.dispose();
  }

  private _onWindowResize = (): void => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      this.setState({
        isSmallScreen: window.innerWidth < UHFBreakPoints.mobile
      });
    }, 100);
  };

  private _openNavPanel = (): void => {
    this.setState({ isNavOpen: true });
  };

  private _closeNavPanel = (): void => {
    this.setState({ isNavOpen: false });
  };

  private _renderMicrosoftLogo(): JSX.Element {
    return (
      <a href="https://microsoft.com/" title="Home page" aria-label="Home page" className={styles.microsoftLogo}>
        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Microsoft logo" />
      </a>
    );
  }

  private _renderHomeLink(): JSX.Element {
    return (
      <div className={styles.isHomePage}>
        {this._renderMicrosoftLogo()}
        <a href="/#" className={styles.isFabricLink}>
          Fabric
        </a>
      </div>
    );
  }

  private _renderLink(page: INavPage, isStacked?: boolean) {
    if (page.isHiddenFromMainNav) {
      return null;
    }
    return (
      <li
        className={css(
          styles.link,
          page.isHomePage && styles.isHomePage,
          page.className && styles[page.className],
          isStacked && styles.isStacked
        )}
        key={page.url}
      >
        <a href={page.url} onClick={this.props.onLinkClick} title={page.title}>
          <span className={styles.linkTitle}>{page.title}</span>
        </a>
      </li>
    );
  }

  private _renderLinkList(pages: INavPage[], isStacked?: boolean) {
    const links = pages
      .filter(page => page.isHiddenFromMainNav || !page.isHomePage || isStacked)
      .map(page => this._renderLink(page, isStacked));

    return (
      <ul className={css(styles.links, isStacked && styles.isStacked)} aria-label="Website top-level navigation">
        {links}
      </ul>
    );
  }
}

export const TopNav = TopNavBase;
