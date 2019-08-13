import * as React from 'react';
import {
  css,
  DelayedRender,
  getId,
  classNamesFunction,
  getNativeProps,
  htmlElementProperties,
  initializeComponentRef,
  warnDeprecations,
  warnMutuallyExclusive
} from '../../Utilities';
import { IconButton } from '../../Button';
import { Icon } from '../../Icon';
import { IMessageBarProps, IMessageBarStyleProps, IMessageBarStyles, MessageBarType } from './MessageBar.types';

const getClassNames = classNamesFunction<IMessageBarStyleProps, IMessageBarStyles>();

export interface IMessageBarState {
  /**
   * Whether a truncated single-line MessageBar has been expanded.
   * Only applies for MessageBars with `isMultiline: false` and `showExpandButton: true`
   * (or deprecated `truncated: true`).
   */
  isExpanded?: boolean;
}

const ICON_MAP = {
  [MessageBarType.info]: 'Info',
  [MessageBarType.warning]: 'Info',
  [MessageBarType.error]: 'ErrorBadge',
  [MessageBarType.blocked]: 'Blocked2',
  [MessageBarType.remove]: 'Blocked', // TODO remove deprecated value at >= 1.0.0
  [MessageBarType.severeWarning]: 'Warning',
  [MessageBarType.success]: 'Completed'
};

const COMPONENT_NAME = 'MessageBar';

export class MessageBarBase extends React.Component<IMessageBarProps, IMessageBarState> {
  public static defaultProps: IMessageBarProps = {
    messageBarType: MessageBarType.info,
    isMultiline: true
  };

  private _labelId: string;
  private _classNames: { [key in keyof IMessageBarStyles]: string };

  constructor(props: IMessageBarProps) {
    super(props);

    initializeComponentRef(this);

    if (process.env.NODE_ENV !== 'production') {
      warnDeprecations(COMPONENT_NAME, props, {
        ariaLabel: 'aria-label',
        overflowButtonAriaLabel: 'expandButtonAriaLabel',
        truncated: 'showExpandButton'
      });
      warnMutuallyExclusive(COMPONENT_NAME, props, {
        showExpandButton: 'actions',
        truncated: 'actions'
      });
    }

    this._labelId = getId(COMPONENT_NAME);

    this.state = {
      isExpanded: false
    };
  }

  public render(): JSX.Element {
    const { theme, className, messageBarType, onDismiss, actions, truncated, isMultiline, showExpandButton } = this.props;
    const { isExpanded } = this.state;

    this._classNames = getClassNames(this.props.styles!, {
      theme: theme!,
      messageBarType: messageBarType || MessageBarType.info,
      onDismiss: !!onDismiss,
      hasOnDismiss: !!onDismiss,
      actions: !!actions,
      truncated: truncated || showExpandButton,
      showExpandButton: truncated || showExpandButton,
      isMultiline: isMultiline,
      expandSingleLine: isExpanded,
      isExpanded: isExpanded,
      className
    });

    return (
      <div style={{ background: theme!.semanticColors.bodyBackground }}>
        <div className={this._classNames.root}>{isMultiline ? this._renderMultiLine() : this._renderSingleLine()}</div>
      </div>
    );
  }

  private _renderActions(): JSX.Element | null {
    if (this.props.actions) {
      return <div className={this._classNames.actions}>{this.props.actions}</div>;
    }
    return null;
  }

  private _renderDismissButton(): JSX.Element | null {
    if (this.props.onDismiss) {
      return (
        <IconButton
          disabled={false}
          className={css(this._classNames.dismissal, this._classNames.dismissButton)}
          onClick={this.props.onDismiss}
          iconProps={{ iconName: 'Clear' }}
          ariaLabel={this.props.dismissButtonAriaLabel}
        />
      );
    }
    return null;
  }

  private _renderExpandButton(): JSX.Element | null {
    const props = this.props;
    const classNames = this._classNames;
    if (!props.actions && (props.truncated || props.showExpandButton)) {
      return (
        <div className={classNames.expandSingleLine}>
          <IconButton
            disabled={false}
            className={css(classNames.expand, classNames.expandButton)}
            onClick={this._onExpandClick}
            iconProps={{ iconName: this.state.isExpanded ? 'DoubleChevronUp' : 'DoubleChevronDown' }}
            ariaLabel={props.expandButtonAriaLabel || props.overflowButtonAriaLabel}
            aria-expanded={this.state.isExpanded}
            aria-controls={this._labelId}
          />
        </div>
      );
    }
    return null;
  }

  private _renderIcon(): JSX.Element {
    return (
      <div className={this._classNames.iconContainer} aria-hidden>
        <Icon iconName={ICON_MAP[this.props.messageBarType!]} className={this._classNames.icon} />
      </div>
    );
  }

  private _renderMultiLine(): JSX.Element {
    return (
      <>
        <div className={this._classNames.content}>
          {this._renderIcon()}
          {this._renderInnerText()}
          {this._renderDismissButton()}
        </div>
        {this._renderActions()}
      </>
    );
  }

  private _renderSingleLine(): JSX.Element {
    return (
      <div className={this._classNames.content}>
        {this._renderIcon()}
        {this._renderInnerText()}
        {this._renderExpandButton()}
        {this._renderActions()}
        {this.props.onDismiss && <div className={this._classNames.dismissSingleLine}>{this._renderDismissButton()}</div>}
      </div>
    );
  }

  private _renderInnerText(): JSX.Element {
    const nativeProps = getNativeProps<React.HTMLAttributes<HTMLSpanElement>>(this.props, htmlElementProperties, ['className']);

    let announcementPriority: 'polite' | 'assertive' = 'polite';
    switch (this.props.messageBarType) {
      case MessageBarType.blocked:
      case MessageBarType.error:
      case MessageBarType.severeWarning:
        announcementPriority = 'assertive';
        break;
    }

    return (
      <div className={this._classNames.text} id={this._labelId}>
        <span className={this._classNames.innerText} role="status" aria-live={announcementPriority} {...nativeProps}>
          <DelayedRender>
            <span>{this.props.children}</span>
          </DelayedRender>
        </span>
      </div>
    );
  }

  private _onExpandClick = (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };
}
