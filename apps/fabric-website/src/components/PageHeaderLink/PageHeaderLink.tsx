import * as React from 'react';
import * as Animate from '../../utilities/animation/Animate';
import WindowWidthUtility from '../../utilities/WindowWidthUtility';

export interface IPageHeaderLink {
  text: string;
  href: string;
}

export class PageHeaderLink extends React.Component<IPageHeaderLink, {}> {
  private _currentBreakpoint: string;
  private _scrollDistance: number;

  public componentDidMount(): void {
    window.addEventListener('resize', this._getBreakpoint);
    this._getBreakpoint();
  }

  public render(): JSX.Element {
    return (
      <a href={this.props.href} onClick={this._onClick} data-title={this.props.text}>
        {this.props.text}
      </a>
    );
  }

  private _setScrollDistance(): number {
    return 160; // UHF header change the requirement
  }

  private _getBreakpoint = () => {
    const breakpoint = WindowWidthUtility.currentFabricBreakpoint();
    if (this._currentBreakpoint !== breakpoint) {
      this._currentBreakpoint = breakpoint;
      this._scrollDistance = this._setScrollDistance();
    }
  };

  private _onClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.pushState({}, '', event.currentTarget.getAttribute('href'));
    const navigatorUserAgent = navigator.userAgent.toLowerCase();
    let hash = this._extractAnchorLink(window.location.hash);
    if (navigatorUserAgent.indexOf('firefox') > -1) {
      hash = decodeURI(hash);
    }
    const el = document.getElementById(hash)!;
    const elRect = el.getBoundingClientRect();
    const bodySTop = document.body.scrollTop;
    let currentScrollPosition = bodySTop + elRect.top;
    let scrollTarget: HTMLBodyElement | HTMLHtmlElement = document.querySelector('body')!;

    if (
      navigatorUserAgent.indexOf('firefox') > -1 ||
      (navigatorUserAgent.indexOf('chrome') > -1 && navigatorUserAgent.indexOf('edge') < 0)
    ) {
      currentScrollPosition += window.scrollY;
      scrollTarget = document.querySelector('html')!;
    }

    if (currentScrollPosition < 0) {
      currentScrollPosition = 0;
    }

    Animate.scrollTo(scrollTarget, {
      duration: 0.3,
      top: currentScrollPosition - this._scrollDistance
    });
  };

  private _extractAnchorLink(path: string) {
    const split = path.split('#');
    const cleanedSplit = split.filter(value => {
      if (value === '') {
        return false;
      } else {
        return true;
      }
    });
    return cleanedSplit[cleanedSplit.length - 1];
  }
}
