import * as React from 'react';
import { LinkBase } from './Link.base';

import { IStyle, ITheme } from '../../Styling';
import { IRefObject, IStyleFunctionOrObject, Omit } from '../../Utilities';
import { IKeytipProps } from '../../Keytip';

/**
 * {@docCategory Link}
 */
export interface ILink {
  /** Sets focus to the link. */
  focus(): void;
}

/**
 * @deprecated No longer used
 */
export interface ILinkHTMLAttributes<T> extends React.HTMLAttributes<T> {
  // Shared
  type?: string;

  // Anchor
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  rel?: string;
  target?: string;

  // Button
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  value?: string | string[] | number;

  // Any other props for HTMLElements or a React component passed to as
  [key: string]: any;
}

/**
 * Types which should be included when calculating allowed props for a Link.
 * {@docCategory Link}
 */
export type LinkPropsFor = HTMLAnchorElement | HTMLButtonElement | HTMLElement | LinkBase;

/**
 * Link component props.
 * Native props for `<a>` and `<button>` are supported even if not included in the list below.
 * {@docCategory Link}
 */
export interface ILinkProps
  extends React.HTMLAttributes<LinkPropsFor>,
    React.AnchorHTMLAttributes<LinkPropsFor>,
    Omit<React.ButtonHTMLAttributes<LinkPropsFor>, 'type'> {
  /**
   * Optional callback to access the ILink interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<ILink>;

  /**
   * URL the link points to. If not provided, the link renders as a button (unless that behavior is
   * overridden using `as`).
   */
  href?: string;

  /**
   * Where to display the linked URL. Common values are `_blank` (a new tab or window),
   * `_self` (the current window/context), `_parent`, and `_top`.
   */
  target?: string;

  /**
   * Relationship to the linked URL (can be a space-separated list).
   * Most common values are `noreferrer` and/or `noopener`.
   */
  rel?: string;

  /**
   * Whether the link is disabled
   */
  disabled?: boolean;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<ILinkStyleProps, ILinkStyles>;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * A component that should be used as the root element of the link returned from the Link component.
   */
  as?: string | React.ComponentType;

  /**
   * Optional keytip for this Link
   */
  keytipProps?: IKeytipProps;

  /** Any other props for elements or a React component passed to `as` */
  [key: string]: any;
}

/**
 * {@docCategory Link}
 */
export interface ILinkStyleProps {
  className?: string;
  isButton?: boolean;
  isDisabled?: boolean;
  theme: ITheme;
}

/**
 * {@docCategory Link}
 */
export interface ILinkStyles {
  root: IStyle;
}
