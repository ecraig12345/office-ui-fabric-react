import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { mergeStyleSets, getTheme, FontWeights } from 'office-ui-fabric-react/lib/Styling';

export interface ICalloutCoverExampleState {
  isCalloutVisible?: boolean;
  directionalHint?: DirectionalHint;
}

const DIRECTION_OPTIONS = [
  { key: DirectionalHint.topLeftEdge, text: 'Top Left Edge' },
  { key: DirectionalHint.topCenter, text: 'Top Center' },
  { key: DirectionalHint.topRightEdge, text: 'Top Right Edge' },
  { key: DirectionalHint.topAutoEdge, text: 'Top Auto Edge' },
  { key: DirectionalHint.bottomLeftEdge, text: 'Bottom Left Edge' },
  { key: DirectionalHint.bottomCenter, text: 'Bottom Center' },
  { key: DirectionalHint.bottomRightEdge, text: 'Bottom Right Edge' },
  { key: DirectionalHint.bottomAutoEdge, text: 'Bottom Auto Edge' },
  { key: DirectionalHint.leftTopEdge, text: 'Left Top Edge' },
  { key: DirectionalHint.leftCenter, text: 'Left Center' },
  { key: DirectionalHint.leftBottomEdge, text: 'Left Bottom Edge' },
  { key: DirectionalHint.rightTopEdge, text: 'Right Top Edge' },
  { key: DirectionalHint.rightCenter, text: 'Right Center' },
  { key: DirectionalHint.rightBottomEdge, text: 'Right Bottom Edge' }
];

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
  }
});

export class CalloutCoverExample extends React.Component<{}, ICalloutCoverExampleState> {
  private _targetRef = React.createRef<HTMLDivElement>();

  public constructor(props: {}) {
    super(props);

    this.state = {
      isCalloutVisible: false,
      directionalHint: DirectionalHint.bottomLeftEdge
    };
  }

  public render(): JSX.Element {
    const { isCalloutVisible, directionalHint } = this.state;
    return (
      <div>
        <div ref={this._targetRef}>
          <DefaultButton
            onClick={this._onShowHideCallout}
            text={isCalloutVisible ? 'Hide callout' : 'Show callout'}
            // Extra wide to see the directional hint's result more easily
            styles={{ root: { width: 400 } }}
          />
        </div>
        <Dropdown
          label="Directional hint"
          selectedKey={directionalHint!}
          options={DIRECTION_OPTIONS}
          onChange={this._onDirectionalChanged}
          styles={{ root: { width: 200, marginTop: 20 } }}
        />
        {isCalloutVisible && (
          <Callout
            onDismiss={this._onDismiss}
            target={this._targetRef.current}
            directionalHint={directionalHint}
            coverTarget={true}
            isBeakVisible={false}
            gapSpace={0}
            styles={{ root: { maxWidth: 300 } }}
          >
            <div className={classNames.header}>
              <p className={classNames.title}>I'm covering the target!</p>
            </div>
            <div className={classNames.inner}>
              <DefaultButton onClick={this._onShowHideCallout} text="Click to dismiss" />
            </div>
          </Callout>
        )}
      </div>
    );
  }

  private _onDismiss = (): void => {
    this.setState({ isCalloutVisible: false });
  };

  private _onShowHideCallout = (): void => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };

  private _onDirectionalChanged = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption): void => {
    this.setState({
      directionalHint: option.key as DirectionalHint
    });
  };
}
