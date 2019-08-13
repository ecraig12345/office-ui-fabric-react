import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { getTheme, FontWeights, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { getId } from 'office-ui-fabric-react/lib/Utilities';

export interface ICalloutBasicExampleState {
  isCalloutVisible?: boolean;
}

// Themed styles for the example.
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
  ],
  actions: { marginTop: 20 }
});

// Example code
export class CalloutBasicExample extends React.Component<{}, ICalloutBasicExampleState> {
  public state: ICalloutBasicExampleState = {
    isCalloutVisible: false
  };

  // Use getId() to ensure that the callout label and description IDs are unique on the page.
  // (It's also okay to use plain strings without getId() and manually ensure their uniqueness.)
  private _labelId: string = getId('callout-label');
  private _descriptionId: string = getId('callout-description');
  private _targetId: string = getId('callout-target');

  public render(): JSX.Element {
    const { isCalloutVisible } = this.state;

    return (
      <div>
        <DefaultButton id={this._targetId} onClick={this._onShowHideCallout} text={isCalloutVisible ? 'Hide callout' : 'Show callout'} />
        <Callout
          ariaLabelledBy={this._labelId}
          ariaDescribedBy={this._descriptionId}
          role="alertdialog"
          gapSpace={0}
          target={'#' + this._targetId}
          onDismiss={this._onCalloutDismiss}
          setInitialFocus={true}
          hidden={!this.state.isCalloutVisible}
          styles={{ root: { maxWidth: 300 } }}
        >
          <div className={classNames.header}>
            <p className={classNames.title} id={this._labelId}>
              All of your favorite people
            </p>
          </div>
          <div className={classNames.inner}>
            <p className={classNames.subText} id={this._descriptionId}>
              Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
            </p>
            <div className={classNames.actions}>
              <Link href="http://microsoft.com" target="_blank">
                Go to Microsoft
              </Link>
            </div>
          </div>
        </Callout>
      </div>
    );
  }

  private _onShowHideCallout = (): void => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };

  private _onCalloutDismiss = (): void => {
    this.setState({
      isCalloutVisible: false
    });
  };
}
