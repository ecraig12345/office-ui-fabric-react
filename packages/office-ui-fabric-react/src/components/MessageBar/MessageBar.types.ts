import * as React from 'react';
import { BaseButton, Button } from '../../Button';
import { ITheme, IStyle } from '../../Styling';
import { IRefObject, IStyleFunctionOrObject } from '../../Utilities';

/**
 * {@docCategory MessageBar}
 */
export interface IMessageBar {}

/**
 * {@docCategory MessageBar}
 */
export interface IMessageBarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Optional callback to access the IMessageBar interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<IMessageBar>;

  /**
   * The type of MessageBar to render.
   * @defaultvalue MessageBarType.info
   */
  messageBarType?: MessageBarType;

  /**
   * Actions to show on the right side of the message bar.
   * It's recommended to use `MessageBarButton`s wrapped in a `div` for this param.
   */
  actions?: JSX.Element;

  /**
   * A description of the message bar for the benefit of screen readers.
   * @deprecated Use native prop `aria-label` instead.
   */
  ariaLabel?: string;

  /**
   * Callback for the dismiss button. The dismiss button is only shown if this callback is provided.
   */
  onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement | BaseButton | HTMLAnchorElement | HTMLDivElement | Button>) => any;

  /**
   * Determines if the message bar can display multiple lines of text.
   * If false, and the text overflows over buttons or to another line, it is clipped.
   *
   * By default, when `isMultiline` is false, there's no expand button available to view the
   * whole text. An expand button can be shown by setting `showExpandButton: true` (this should
   * be used sparingly).
   * @defaultvalue true
   */
  isMultiline?: boolean;

  /**
   * Aria label on dismiss button if `onDismiss` is defined.
   */
  dismissButtonAriaLabel?: string;

  /**
   * When `isMultiline` is false, this setting determines whether an expand button is shown
   * (this should be used sparingly).
   *
   * This setting is mutually exclusive with `actions` and `isMultiline: true`, and will be
   * ignored if either of those is set.
   * @defaultvalue false
   */
  showExpandButton?: boolean;

  /**
   * Determines if the message bar text is truncated (this should be used sparingly).
   * If true, a button will render to toggle between a single line view and multiline view.
   *
   * This setting is mutually exclusive with `actions` and `isMultiline: true`, and will be
   * ignored if either of those is set.
   * @defaultvalue false
   * @deprecated Use `showExpandButton`
   */
  truncated?: boolean;

  /**
   * Aria label on the expand button if `truncated` is true.
   */
  expandButtonAriaLabel?: string;

  /**
   * @deprecated Use `expandButtonAriaLabel`
   */
  overflowButtonAriaLabel?: string;

  /**
   * Additional CSS class(es) to apply to the MessageBar.
   */
  className?: string;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IMessageBarStyleProps, IMessageBarStyles>;
}

/**
 * {@docCategory MessageBar}
 */
export interface IMessageBarStyleProps
  extends Required<Pick<IMessageBarProps, 'theme'>>,
    Pick<IMessageBarProps, 'className' | 'messageBarType' | 'truncated' | 'isMultiline' | 'showExpandButton'> {
  /**
   * Whether the MessageBar contains a dismiss button.
   */
  hasOnDismiss?: boolean;

  /**
   * Whether the truncated (single-line) MessageBar has been expanded.
   * Only applies for MessageBars with `truncated: true`.
   */
  isExpanded?: boolean;

  /**
   * Whether the MessageBar contains any action elements.
   */
  hasActions?: boolean;

  /** @deprecated Use `hasOnDismiss` */
  onDismiss?: boolean;
  /** @deprected Use `isExpanded` */
  expandSingleLine?: boolean;
  /** @deprecated Use `hasActions */
  actions?: boolean;
  /** @deprecated Use `showExpandButton` */
  truncated?: boolean;
}

/**
 * {@docCategory MessageBar}
 */
export interface IMessageBarStyles {
  /**
   * Style set for the root element.
   */
  root?: IStyle;

  /**
   * Style set for the element containing the icon, text, and optional dismiss button.
   */
  content?: IStyle;

  /**
   * Style set for the element containing the icon.
   */
  iconContainer?: IStyle;

  /**
   * Style set for the icon.
   */
  icon?: IStyle;

  /**
   * Style set for the element containing the text.
   */
  text?: IStyle;

  /**
   * Style set for the text.
   */
  innerText?: IStyle;

  /**
   * Style set for the optional dismiss IconButton.
   */
  dismissButton?: IStyle;

  /** @deprecated Use `dismissButton` */
  dismissal?: IStyle;

  /**
   * Style set for the IconButton used to expand and collapse the MessageBar.
   */
  expandButton?: IStyle;

  /** @deprecated Use `expandButton` */
  expand?: IStyle;

  /**
   * Style set for the element containing the dismiss button.
   * Only applies in single-line mode (`showExpandButton` is true and `isMultiline` is false).
   */
  dismissSingleLine?: IStyle;

  /**
   * Style set for the element containing the expand button in single-line mode.
   */
  expandSingleLine?: IStyle;

  /**
   * Style set for the optional element containing the action elements.
   */
  actions?: IStyle;
}

/**
 * {@docCategory MessageBar}
 */
export enum MessageBarType {
  /** Info styled MessageBar */
  info = 0,
  /** Error styled MessageBar */
  error = 1,
  /** Blocked styled MessageBar */
  blocked = 2,
  /** SevereWarning styled MessageBar */
  severeWarning = 3,
  /** Success styled MessageBar */
  success = 4,
  /** Warning styled MessageBar */
  warning = 5,
  /**
   * Deprecated at v0.48.0, to be removed at \>= v1.0.0. Use `blocked` instead.
   * @deprecated Use `blocked` instead.
   */
  remove = 90000
}
