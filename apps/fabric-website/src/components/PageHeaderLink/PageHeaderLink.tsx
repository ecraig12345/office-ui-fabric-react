import * as React from 'react';
import * as Animate from '../../utilities/animation/Animate';
import WindowWidthUtility from '../../utilities/WindowWidthUtility';
import { extractAnchorLink } from '@uifabric/fabric-website-resources/lib/utilities/extractAnchor';
import { EventGroup } from 'office-ui-fabric-react/lib/Utilities';

export interface IPageHeaderLink {
  text: string;
  href: string;
}

const SCROLL_DISTANCE = 160;

export class PageHeaderLink extends React.Component<IPageHeaderLink, {}> {
  private _events: EventGroup;
  private _currentBreakpoint: string;

  constructor(props: IPageHeaderLink) {
    super(props);
    this._events = new EventGroup(this);
  }

  public componentDidMount(): void {
    this._events.on(window, 'resize', this._setBreakpointAndScroll);
    this._setBreakpointAndScroll();
  }

  public componentWillUnmount() {
    this._events.dispose();
  }

  public render(): JSX.Element {
    return (
      <a href={this.props.href} onClick={this._onClick} data-title={this.props.text}>
        {this.props.text}
      </a>
    );
  }

  private _setBreakpointAndScroll = () => {
    const breakpoint = WindowWidthUtility.currentFabricBreakpoint();
    if (this._currentBreakpoint !== breakpoint) {
      this._currentBreakpoint = breakpoint;
    }
  };

  private _onClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.pushState({}, '', event.currentTarget.getAttribute('href'));
    const navigatorUserAgent = navigator.userAgent.toLowerCase();
    let hash = extractAnchorLink(window.location.hash);
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
      top: currentScrollPosition - SCROLL_DISTANCE
    });
  };
}
