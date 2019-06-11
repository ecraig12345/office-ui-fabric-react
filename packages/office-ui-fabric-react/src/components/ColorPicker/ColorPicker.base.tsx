import * as React from 'react';
import { BaseComponent, classNamesFunction } from '../../Utilities';
import { IColorPickerProps, IColorPickerStyleProps, IColorPickerStyles, IColorPicker } from './ColorPicker.types';
import { TextField } from '../../TextField';
import { ColorRectangle } from './ColorRectangle/ColorRectangle';
import { ColorSlider } from './ColorSlider/ColorSlider';
// These are separated to help with bundling
import { IColor, IRGB } from '../../utilities/color/interfaces';
import { getColorFromString } from '../../utilities/color/getColorFromString';
import { getColorFromRGBA } from '../../utilities/color/getColorFromRGBA';
import { updateA } from '../../utilities/color/updateA';
import { updateH } from '../../utilities/color/updateH';
import { MAX_COLOR_ALPHA, MAX_COLOR_RGB } from '../../utilities/color/consts';
import { correctRGB } from '../../utilities/color/correctRGB';
import { correctHex } from '../../utilities/color/correctHex';

type IRGBHex = Pick<IColor, 'r' | 'g' | 'b' | 'a' | 'hex'>;

export interface IColorPickerState {
  color: IColor;
  editingColor?: {
    component: keyof IRGBHex;
    value: string;
  };
  // prevColorFromProps?: IColor;
}

const getClassNames = classNamesFunction<IColorPickerStyleProps, IColorPickerStyles>();

const colorComponents: Array<keyof IRGBHex> = ['hex', 'r', 'g', 'b', 'a'];
const validHexRegex = /^[\da-f]{0,6}$/i;
const validRgbaRegex = /^\d{0,3}$/;

/**
 * {@docCategory ColorPicker}
 */
export class ColorPickerBase extends BaseComponent<IColorPickerProps, IColorPickerState> implements IColorPicker {
  public static defaultProps = {
    hexLabel: 'Hex',
    redLabel: 'Red',
    greenLabel: 'Green',
    blueLabel: 'Blue',
    alphaLabel: 'Alpha'
  };

  private _textChangeHandlers: {
    [K in keyof IRGBHex]: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => void
  };
  private _textLabels: { [K in keyof IRGBHex]?: string };

  public static getDerivedStateFromProps(
    nextProps: Readonly<IColorPickerProps>,
    prevState: IColorPickerState
  ): Partial<IColorPickerState> | null {
    const nextColor = nextProps.color;
    if (nextColor) {
      // if (nextColor && nextColor !== prevState.prevColorFromProps) {
      return _updateColor(nextProps, prevState, _getColorObj(nextColor));
    }
    return null;
  }

  constructor(props: IColorPickerProps) {
    super(props);

    this._warnDeprecations({
      onColorChanged: 'onChange'
    });

    this._warnMutuallyExclusive({
      color: 'defaultColor'
    });

    const colorFromProps = props.color || props.defaultColor;
    this.state = {
      color: _getColorObj(colorFromProps) || getColorFromString('#ffffff')!
    };

    this._textChangeHandlers = {} as any;
    for (const component of colorComponents) {
      this._textChangeHandlers[component] = this._onTextChange.bind(this, component);
    }
    this._textLabels = {
      r: props.redLabel,
      g: props.greenLabel,
      b: props.blueLabel,
      a: props.alphaLabel,
      hex: props.hexLabel
    };
  }

  public get color(): IColor {
    return this.state.color;
  }

  public render(): JSX.Element {
    const props = this.props;
    const { theme, className, styles } = props;
    const { color } = this.state;

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <div className={classNames.root}>
        <div className={classNames.panel}>
          <ColorRectangle color={color} onChange={this._onSVChanged} />
          <ColorSlider className="is-hue" type="hue" value={color.h} onChange={this._onHChanged} />
          {!props.alphaSliderHidden && (
            <ColorSlider className="is-alpha" type="alpha" backgroundColor={`#${color.hex}`} value={color.a} onChange={this._onAChanged} />
          )}
          <table className={classNames.table} cellPadding="0" cellSpacing="0">
            <thead>
              <tr className={classNames.tableHeader}>
                <td className={classNames.tableHexCell}>{props.hexLabel}</td>
                <td>{props.redLabel}</td>
                <td>{props.greenLabel}</td>
                <td>{props.blueLabel}</td>
                {!props.alphaSliderHidden && <td>{props.alphaLabel}</td>}
              </tr>
            </thead>
            <tbody>
              <tr>
                {...colorComponents.map((comp: keyof IRGBHex) => {
                  if (comp === 'a' && props.alphaSliderHidden) {
                    return null;
                  }
                  return (
                    <td key={comp} style={comp === 'hex' ? undefined : { width: '18%' }}>
                      <TextField
                        className={classNames.input}
                        onChange={this._textChangeHandlers[comp]}
                        onBlur={this._onBlur}
                        value={this._getDisplayValue(comp)}
                        spellCheck={false}
                        ariaLabel={this._textLabels[comp]}
                      />
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  private _getDisplayValue(component: keyof IColor): string {
    const { color, editingColor } = this.state;
    if (editingColor && editingColor.component === component) {
      return editingColor.value;
    }
    if (typeof color[component] === 'number') {
      return String(component === 'a' ? color.a!.toPrecision(3) : color[component]);
    }
    return (color[component] as string) || '';
  }

  private _onSVChanged = (ev: React.MouseEvent<HTMLElement>, color: IColor): void => {
    this._updateColor(ev, color);
  };

  private _onHChanged = (ev: React.MouseEvent<HTMLElement>, h: number): void => {
    this._updateColor(ev, updateH(this.state.color, h));
  };

  private _onAChanged = (ev: React.MouseEvent<HTMLElement>, a: number): void => {
    this._updateColor(ev, updateA(this.state.color, a));
  };

  private _onTextChange(component: keyof IRGBHex, event: React.FormEvent<HTMLInputElement>, newValue?: string): void {
    const color = this.state.color;
    const isHex = component === 'hex';
    const validRegex = isHex ? validHexRegex : validRgbaRegex;
    newValue = newValue || '';

    // Ignore what the user typed if it contains invalid characters or is too long.
    if (!validRegex.test(newValue)) {
      return;
    }

    // Determine if the entry is valid (different methods for hex or RGBA)
    let isValid: boolean;
    if (newValue === '') {
      isValid = false;
    } else if (isHex) {
      isValid = newValue.length === 3 || newValue.length === 6;
    } else {
      const newNumber = Number(newValue || '0');
      isValid = component === 'a' ? newNumber <= MAX_COLOR_ALPHA : newNumber <= MAX_COLOR_RGB;
    }

    if (!isValid) {
      // If the new value is an empty string or other invalid value, save that to display.
      // (if the user still hasn't entered anything on blur, the last value is restored)
      this.setState({ editingColor: { component, value: newValue } });
    } else if (String(color[component]) === newValue) {
      // If the new value is the same as the current value, mostly ignore it.
      // Exception is that if the user was previously editing the value (but hadn't yet entered
      // a new valid value), we should clear the intermediate value.
      if (this.state.editingColor) {
        this.setState({ editingColor: undefined });
      }
    } else {
      // Should be a valid color. Update the value.
      const newColor = isHex
        ? getColorFromString('#' + newValue)
        : getColorFromRGBA({
            r: color.r,
            g: color.g,
            b: color.b,
            a: color.a || MAX_COLOR_ALPHA,
            // Overwrite whichever key is being updated with the new value
            [component]: Number(newValue)
          });
      this._updateColor(event, newColor);
    }
  }

  private _onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { color, editingColor } = this.state;
    if (!editingColor) {
      return;
    }

    // If there was an intermediate incorrect value (such as too large or empty), correct it.
    const { value, component } = editingColor;
    const isHex = component === 'hex';
    const minLength = isHex ? 3 : 1;
    if (value.length >= minLength) {
      // Real value. Clamp to appropriate length (hex) or range (rgba).
      let newColor: IColor | undefined;
      if (component === 'hex') {
        newColor = getColorFromString('#' + correctHex(value));
      } else {
        newColor = getColorFromRGBA(
          correctRGB({
            ...color,
            [component]: Number(value)
          } as IRGB)
        );
      }

      // Update state and call onChange
      this._updateColor(event, newColor);
    } else {
      // Intermediate value was an empty string (or possibly in the hex case, too short).
      // Just clear the intermediate state and revert to the previous value.
      this.setState({ editingColor: undefined });
    }
  };

  /**
   * Update the displayed color and call change handlers if appropriate.
   * @param ev - Event if call was triggered by an event (undefined if triggered by props change)
   * @param newColor - Updated color
   */
  private _updateColor(ev: React.SyntheticEvent<HTMLElement> | undefined, newColor: IColor | undefined): void {
    if (!newColor) {
      return;
    }

    const props = this.props;
    const update = _updateColor(props, this.state, newColor);

    if (update) {
      this.setState(update as IColorPickerState, () => {
        if (ev && props.onChange) {
          props.onChange(ev, newColor);
        }

        // To preserve the existing behavior, this one is called even when the change comes from a
        // props update (which is not very useful)
        if (props.onColorChanged) {
          props.onColorChanged(newColor.str, newColor);
        }
      });
    }
  }
}

function _getColorObj(color: IColor | string | undefined): IColor | undefined {
  return typeof color === 'string' ? getColorFromString(color) : color;
}

function _updateColor(
  nextProps: Readonly<IColorPickerProps>,
  prevState: IColorPickerState,
  newColor?: IColor
): Partial<IColorPickerState> | null {
  if (!newColor) {
    return null;
  }

  const { color } = prevState;
  const isDifferentColor = newColor.h !== color.h || newColor.str !== color.str;
  if (isDifferentColor || prevState.editingColor) {
    return {
      color: newColor,
      editingColor: undefined
    };
  }
  return null;
}
