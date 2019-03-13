// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

const SCROLL_FRAME_RATE: number = 10;

interface IScrollObj {
  element: HTMLElement;
  props: any;
  step: number;
  beginTop?: number;
  change?: number;
  onEnd?: () => {};
  onEndArgs?: any[];
}

export interface IScrollToOptions {
  /** The duration of the transition in seconds */
  duration: number;
  /** The end scroll position of the element */
  top: number;
  /** A delay in seconds that occurs before the scroll starts */
  delay?: number;
  /** Function called when the scrolling animation ends */
  onEnd?: (...args: any[]) => void;
  /** Args passed to the onEnd function */
  onEndArgs?: any[];
}

const _animationObjects: IScrollObj[] = [];

export function scrollTo(element: HTMLElement, props: IScrollToOptions): void {
  const obj: IScrollObj = { element: element, props: props, step: 0 };
  _setScrollProperties(obj);
  if (obj.props.delay) {
    setTimeout(_animationObjects as any, obj.props.delay * 1000, obj);
  } else {
    _animateScroll(obj);
  }
  _animationObjects.push(obj);
}

function _setScrollProperties(obj: IScrollObj): void {
  obj.beginTop = obj.element.scrollTop;
  obj.change = obj.props.top - obj.beginTop;
  obj.props.duration = obj.props.duration * 1000;
}

function _animateScroll(obj: IScrollObj): void {
  const totalSteps: number = obj.props.duration / SCROLL_FRAME_RATE;
  const top: number = _easeOutExpo(obj.step++, obj.beginTop!, obj.change!, totalSteps);
  obj.element.scrollTop = top;
  if (obj.step >= totalSteps) {
    obj.element.scrollTop = obj.props.top;
    _executeCallback(obj.props);
    _removeAnimationObject(obj);
  } else {
    setTimeout(() => {
      requestAnimationFrame(() => {
        _animateScroll(obj);
      });
    }, SCROLL_FRAME_RATE);
  }
}

function _removeAnimationObject(obj: IScrollObj): void {
  let i: number = _animationObjects.length;
  while (i--) {
    if (_animationObjects[i] === obj) {
      _animationObjects.splice(i, 1);
    }
  }
}

function _executeCallback(obj: IScrollObj): void {
  if (obj.onEnd) {
    obj.onEnd.apply(null, obj.onEndArgs || []);
  }
}

function _easeOutExpo(time: number, begin: number, change: number, duration: number): number {
  return time === duration ? begin + change : change * (-Math.pow(2, (-10 * time) / duration) + 1) + begin;
}
