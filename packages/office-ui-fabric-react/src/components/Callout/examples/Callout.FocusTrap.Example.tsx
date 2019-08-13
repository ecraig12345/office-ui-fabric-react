import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusTrapCallout } from 'office-ui-fabric-react/lib/Callout';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets, getTheme, FontWeights } from 'office-ui-fabric-react/lib/Styling';

export interface ICalloutFocusTrapExampleProps {
  items: ICommandBarItemProps[];
}

export interface ICalloutFocusTrapExampleState {
  isCalloutVisible: boolean;
}

const theme = getTheme();
const classNames = mergeStyleSets({
  header: { padding: '18px 24px 12px' },
  title: [
    theme.fonts.xLarge,
    {
      margin: 0,
      color: theme.palette.neutralPrimary,
      fontWeight: FontWeights.semilight
    }
  ],
  inner: {
    height: '100%',
    padding: '0 24px 20px'
  },
  subText: [
    theme.fonts.small,
    {
      margin: 0,
      color: theme.palette.neutralPrimary
    }
  ]
});

export class CalloutFocusTrapExample extends React.Component<ICalloutFocusTrapExampleProps, ICalloutFocusTrapExampleState> {
  public state: ICalloutFocusTrapExampleState = {
    isCalloutVisible: false
  };

  private _targetRef = React.createRef<HTMLDivElement>();
  // Use getId() to ensure that the callout title ID is unique on the page.
  // (It's also okay to use a plain string without getId() and manually ensure its uniqueness.)
  private _titleId: string = getId('callout-label');

  public render(): JSX.Element {
    const { isCalloutVisible } = this.state;

    return (
      <div>
        <div ref={this._targetRef}>
          <DefaultButton onClick={this._onShowHideCallout} text={isCalloutVisible ? 'Hide callout' : 'Show callout'} />
        </div>
        {isCalloutVisible && (
          <FocusTrapCallout
            role="alertdialog"
            ariaLabelledBy={this._titleId}
            gapSpace={0}
            target={this._targetRef.current}
            onDismiss={this._onShowHideCallout}
            setInitialFocus={true}
            styles={{ root: { maxWidth: 300 } }}
          >
            <div className={classNames.header}>
              <p className={classNames.title} id={this._titleId}>
                Callout title here
              </p>
            </div>
            <div className={classNames.inner}>
              <p className={classNames.subText}>
                Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
              </p>
            </div>
            <CommandBar items={this.props.items} />
          </FocusTrapCallout>
        )}
      </div>
    );
  }

  private _onShowHideCallout = () => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };
}
