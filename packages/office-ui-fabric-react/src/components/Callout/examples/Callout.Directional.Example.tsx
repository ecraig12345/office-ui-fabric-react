import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Slider, ISliderStyles } from 'office-ui-fabric-react/lib/Slider';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { mergeStyleSets, getTheme, FontWeights } from 'office-ui-fabric-react/lib/Styling';

export interface ICalloutDirectionalExampleState {
  isCalloutVisible?: boolean;
  directionalHint?: DirectionalHint;
  isBeakVisible?: boolean;
  gapSpace?: number;
  beakWidth?: number;
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

const sliderStyles: Partial<ISliderStyles> = {
  root: { width: 200, paddingTop: 5 }
};

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

export class CalloutDirectionalExample extends React.Component<{}, ICalloutDirectionalExampleState> {
  private _targetRef = React.createRef<HTMLDivElement>();

  public constructor(props: {}) {
    super(props);

    this.state = {
      isCalloutVisible: false,
      isBeakVisible: true,
      directionalHint: DirectionalHint.bottomLeftEdge
    };
  }

  public render(): JSX.Element {
    const { isCalloutVisible, isBeakVisible, directionalHint, gapSpace, beakWidth } = this.state;
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
        <Stack horizontal wrap tokens={{ childrenGap: 40 }} styles={{ root: { marginTop: 20 } }}>
          <Dropdown
            label="Directional hint"
            selectedKey={directionalHint!}
            options={DIRECTION_OPTIONS}
            onChange={this._onDirectionalChanged}
            styles={{ root: { width: 200 } }}
          />
          <Toggle label="Show beak" checked={isBeakVisible} onChange={this._onShowBeakChange} />
          <Slider max={30} label="Gap space" min={0} defaultValue={0} onChange={this._onGapSlider} styles={sliderStyles} />
          {isBeakVisible && (
            <Slider max={50} label="Beak width" min={10} defaultValue={16} onChange={this._onBeakWidthSlider} styles={sliderStyles} />
          )}
        </Stack>
        {isCalloutVisible && (
          <Callout
            gapSpace={gapSpace}
            target={this._targetRef.current}
            isBeakVisible={isBeakVisible}
            beakWidth={beakWidth}
            onDismiss={this._onCalloutDismiss}
            directionalHint={directionalHint}
            styles={{ root: { maxWidth: 300 } }}
          >
            <div className={classNames.header}>
              <p className={classNames.title}>All of your favorite people</p>
            </div>
            <div className={classNames.inner}>
              <p className={classNames.subText}>
                Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
              </p>
            </div>
          </Callout>
        )}
      </div>
    );
  }

  private _onCalloutDismiss = (): void => {
    this.setState({
      isCalloutVisible: false
    });
  };

  private _onShowHideCallout = (): void => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  };

  private _onShowBeakChange = (ev: React.FormEvent<HTMLElement>, isVisible: boolean): void => {
    this.setState({
      isBeakVisible: isVisible,
      beakWidth: 10
    });
  };

  private _onDirectionalChanged = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption): void => {
    this.setState({
      directionalHint: option.key as DirectionalHint
    });
  };

  private _onGapSlider = (value: number): void => {
    this.setState({
      gapSpace: value
    });
  };

  private _onBeakWidthSlider = (value: number): void => {
    this.setState({
      beakWidth: value
    });
  };
}
