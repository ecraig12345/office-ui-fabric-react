import { ITheme, IStyle } from '../../../Styling';
import { IBaseProps, IRefObject, IStyleFunctionOrObject } from '../../../Utilities';

/**
 * {@docCategory ColorPicker}
 */
export interface IColorSlider {
  /** Gets the current value of the color slider. */
  value: number;
}

/**
 * {@docCategory ColorPicker}
 */
export interface IColorSliderProps extends IBaseProps<IColorSlider> {
  /**
   * Gets the component ref.
   */
  componentRef?: IRefObject<IColorSlider>;

  /**
   * Minimum value of the slider.
   * @deprecated Will always be 0.
   */
  minValue?: number;

  /**
   * Maximum value of the slider.
   * @deprecated Will always be 359 for a hue slider or 100 for an alpha slider.
   */
  maxValue?: number;

  /**
   * Current value of the slider. Only provide this if the slider is a controlled component where you
   * are maintaining its current state; otherwise, use the `defaultValue` property.
   */
  value?: number;

  /**
   * Default value of the slider. Only provide this if the slider is an uncontrolled component;
   * otherwise, use the `value` property. Updates to this property will be ignored.
   */
  defaultValue?: number;

  /**
   * A hue slider will display a gradient of all hues and have max value 359.
   * An alpha slider will display a gray checkered pattern in the background and have max value 100.
   * @defaultvalue hue
   */
  type?: 'alpha' | 'hue';

  /**
   * CSS color to display in a transparency gradient over the slider.
   * Only relevant for alpha sliders.
   */
  backgroundColor?: string;

  /**
   * CSS-compatible string for the color of the thumb element.
   * @deprecated Not used. Use `styles.sliderThumb` instead.
   */
  thumbColor?: string;

  /**
   * Custom style for the overlay element.
   * @deprecated Use `styles.sliderOverlay` instead.
   */
  overlayStyle?: React.CSSProperties;

  /**
   * Callback for when the value changes.
   */
  onChange?: (event: React.SyntheticEvent<HTMLElement>, newValue?: number) => void;

  /**
   * Deprecated, use `onChange` instead.
   * @deprecated Use `onChange` instead.
   */
  onChanged?: (newValue: number) => void;

  /**
   * If true, the slider represents an alpha slider (max value 100).
   * Otherwise, the slider represents a hue slider (max value 359).
   * @deprecated Use `type`
   */
  isAlpha?: boolean;

  /**
   * Additional CSS class(es) to apply to the ColorSlider.
   */
  className?: string;

  /**
   * Theme (provided through customization).
   */
  theme?: ITheme;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IColorSliderStyleProps, IColorSliderStyles>;
}

/**
 * {@docCategory ColorPicker}
 */
export interface IColorSliderStyleProps {
  /**
   * Theme (provided through customization).
   */
  theme: ITheme;

  /**
   * Additional CSS class(es) to apply to the ColorSlider.
   */
  className?: string;
}

/**
 * {@docCategory ColorPicker}
 */
export interface IColorSliderStyles {
  /**
   * Style set for the root element.
   */
  root?: IStyle;

  /**
   * Style set for the draggable thumb element.
   */
  sliderThumb?: IStyle;

  /**
   * Style set for the overlay element.
   */
  sliderOverlay?: IStyle;
}
