import * as React from 'react';
import { BaseComponent, classNamesFunction } from '../../../Utilities';
import { IColorSlider, IColorSliderProps, IColorSliderStyleProps, IColorSliderStyles } from './ColorSlider.types';
import { clamp, MAX_COLOR_ALPHA, MAX_COLOR_HUE } from '../../../utilities/color/index';

const getClassNames = classNamesFunction<IColorSliderStyleProps, IColorSliderStyles>();

export interface IColorSliderState {
  /** Current value if the slider is an uncontrolled component (`props.value` not provided) */
  uncontrolledValue: number;
}

export class ColorSliderBase extends BaseComponent<IColorSliderProps, IColorSliderState> implements IColorSlider {
  public static defaultProps = {
    minValue: 0,
    maxValue: 100,
    thumbColor: 'inherit',
    value: 0
  };

  private _root = React.createRef<HTMLDivElement>();
  /** Whether this is an alpha slider (true) or hue slider (false). Locked based on initial props. */
  private _isAlpha: boolean;
  private _maxValue: number;

  constructor(props: IColorSliderProps) {
    super(props);

    this._warnDeprecations({
      onChanged: 'onChange',
      minValue: 'n/a',
      maxValue: 'type',
      thumbColor: 'styles.sliderThumb',
      overlayStyle: 'backgroundColor or styles.sliderOverlay'
    });

    this._warnMutuallyExclusive({
      value: 'defaultValue'
    });

    this._warnConditionallyRequiredProps(['onChange'], 'value', props.value !== undefined);

    this._isAlpha = props.type === 'alpha';
    this._maxValue = this._isAlpha ? MAX_COLOR_ALPHA : MAX_COLOR_HUE;

    this.state = {
      uncontrolledValue: props.defaultValue || 0
    };
  }

  public get value(): number {
    // props.value ALWAYS overrides state.uncontrolledValue if provided
    const { value = this.state.uncontrolledValue } = this.props;
    return value;
  }

  public render(): JSX.Element {
    const { theme, className, styles, backgroundColor } = this.props;

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    const currentPercentage = (100 * this.value) / this._maxValue;

    const hueStyle: React.CSSProperties = {
      background:
        // tslint:disable-next-line:max-line-length
        'linear-gradient(to left,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%)'
    };

    const alphaStyle: React.CSSProperties = {
      backgroundImage:
        // tslint:disable-next-line:max-line-length
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)'
    };

    let { overlayStyle } = this.props;
    if (backgroundColor) {
      overlayStyle = { background: `linear-gradient(to right, transparent 0, ${backgroundColor} 100%)` };
    }

    return (
      <div ref={this._root} className={classNames.root} onMouseDown={this._onMouseDown} style={this._isAlpha ? alphaStyle : hueStyle}>
        <div className={classNames.sliderOverlay} style={overlayStyle} />
        <div className={classNames.sliderThumb} style={{ left: currentPercentage + '%' }} />
      </div>
    );
  }

  private _onMouseDown = (ev: React.MouseEvent<HTMLElement>): void => {
    this._events.on(window, 'mousemove', this._onMouseMove, true);
    this._events.on(window, 'mouseup', this._onMouseUp, true);

    this._onMouseMove(ev);
  };

  private _onMouseMove = (ev: React.MouseEvent<HTMLElement>): void => {
    const props = this.props;
    const maxValue = this._maxValue;
    const root = this._root.current;
    if (!root) {
      return;
    }

    const rectSize = root.getBoundingClientRect();

    const currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
    const newValue = clamp(currentPercentage * maxValue, maxValue);

    if (props.onChange) {
      props.onChange(ev, newValue);
    }

    if (props.onChanged) {
      props.onChanged(newValue);
    }

    if (props.value === undefined) {
      // Only update state if a value is not provided in props
      this.setState({ uncontrolledValue: newValue });
    }

    ev.preventDefault();
    ev.stopPropagation();
  };

  private _onMouseUp = (ev: React.MouseEvent<HTMLElement>): void => {
    this._events.off();
  };
}
