import * as React from 'react';
import { IButtonClassNames } from '../../components/Button/BaseButton.classNames';
import { ITheme } from '../../Styling';

export interface IGridCellProps<T> {
  /**
   * The option that will be made available to the user
   */
  item: T;

  /**
   * Arbitrary unique string associated with the cell.
   */
  id: string;

  /**
   * Whether the cell should be disabled.
   */
  disabled?: boolean;

  /**
   * Whether the cell is currently selected.
   */
  selected?: boolean;

  onClick?: (item: T) => void;

  /**
   * Callback to handle rendering the item.
   */
  onRenderItem: (item: T) => JSX.Element;

  onHover?: (item?: T) => void;

  onFocus?: (item: T) => void;

  /**
   * The accessible role for this cell.
   */
  role?: string;

  /**
   * Class name(s) to apply
   */
  className?: string;

  /**
   * CSS classes used when the cell is disabled.
   */
  cellDisabledStyle?: string[];

  /**
   * CSS classes used when the cell is selected.
   */
  cellIsSelectedStyle?: string[];

  /**
   * Index for this option
   */
  index?: number;

  /**
   * Tooltip and aria label for this cell.
   */
  label?: string;

  /**
   * Method to provide the classnames to style a button.
   * The default value for this prop is the `getClassNames` func defined in `BaseButton.classnames`.
   */
  getClassNames?: (
    theme: ITheme,
    className: string,
    variantClassName: string,
    iconClassName: string | undefined,
    menuIconClassName: string | undefined,
    disabled: boolean,
    checked: boolean,
    expanded: boolean,
    isSplit: boolean | undefined
  ) => IButtonClassNames;

  /**
   * Mouse enter handler. Returns true if the event should be processed, false otherwise.
   */
  onMouseEnter?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;

  /**
   * Mouse move handler. Returns true if the event should be processed, false otherwise.
   */
  onMouseMove?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;

  /**
   * Mouse leave handler. Returns true if the event should be processed, false otherwise.
   */
  onMouseLeave?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;

  /** @deprecated Not used */
  onWheel?: (ev: React.MouseEvent<HTMLButtonElement>) => void;

  /** @deprecated Not used */
  onKeyDown?: (ev: React.KeyboardEvent<HTMLButtonElement>) => void;
}
