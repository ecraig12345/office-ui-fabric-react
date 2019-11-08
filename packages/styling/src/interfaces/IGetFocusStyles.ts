import { IRawStyle } from '@uifabric/merge-styles';

export interface IGetFocusStylesOptions {
  /**
   * The number of pixels to inset the border.
   * @defaultvalue 0
   */
  inset?: number;

  /**
   * The width of the border in pixels.
   * @defaultvalue 1
   */
  width?: number;

  /**
   * The positioning applied to the container.
   * Must be 'relative' or 'absolute' so that the focus border can live around it.
   * @defaultvalue 'relative'
   */
  position?: 'relative' | 'absolute';

  /**
   * Style for high contrast mode.
   */
  highContrastStyle?: IRawStyle;

  /**
   * Color of the border.
   * @defaultvalue theme.palette.white
   */
  borderColor?: string;

  /**
   * Color of the outline.
   * @defaultvalue theme.palette.neutralSecondary
   */
  outlineColor?: string;

  /**
   * Options for when to apply the focus styles.
   * `'focus'` applies styles only when the `:focus` pseudo-selector is active.
   * `'focusVisible'` applies styles only when focus is visible.
   * `'both'` (the default) requires both of the above conditions.
   * `'none'` unconditionally applies the styles.
   * @default 'both'
   */
  focusType?: 'focus' | 'focusVisible' | 'both' | 'none';

  /**
   * If the styles should apply on `:focus` pseudo element.
   * @defaultvalue true
   * @deprecated Use `focusType` instead (this is ignored if `focusType` is provided)
   */
  isFocusedOnly?: boolean;

  /**
   * If false (the default), the returned styles will
   * Whether the returned styles should apply
   * Whether to require the `:focus` pseudo-element selectors
   */
  omitFocusSelector?: boolean;

  /**
   * Whether to only apply a bottom border (instead of an all-around border).
   * @default false
   */
  borderBottomOnly?: boolean;

  /**
   * Additional styles to apply to the `:after` pseudo-element when focused.
   */
  additionalStyles?: IRawStyle;
}
