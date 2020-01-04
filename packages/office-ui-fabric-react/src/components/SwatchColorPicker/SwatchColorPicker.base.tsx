import * as React from 'react';
import {
  classNamesFunction,
  findIndex,
  getId,
  warnMutuallyExclusive,
  warnConditionallyRequiredProps,
  memoizeFunction,
  warnDeprecations
} from '../../Utilities';
import { ISwatchColorPickerProps, ISwatchColorPickerStyleProps, ISwatchColorPickerStyles } from './SwatchColorPicker.types';
import { Grid } from '../../utilities/grid/Grid';
import { IColorCellProps } from './ColorPickerGridCell.types';
import { ColorPickerGridCell } from './ColorPickerGridCell';

export interface ISwatchColorPickerState {
  selectedIndex?: number;
}

const getClassNames = classNamesFunction<ISwatchColorPickerStyleProps, ISwatchColorPickerStyles>();

const COMPONENT_NAME = 'SwatchColorPicker';

export class SwatchColorPickerBase extends React.Component<ISwatchColorPickerProps, ISwatchColorPickerState> {
  public static defaultProps: Partial<ISwatchColorPickerProps> = {
    cellShape: 'circle',
    disabled: false,
    shouldFocusCircularNavigate: true,
    cellMargin: 10
  };

  private _id: string;
  private _cellFocused: boolean;

  // Add an index to each color cells. Memoizes this so that color cells do not re-render on every update.
  private _getItemsWithIndex = memoizeFunction((items: IColorCellProps[]) => {
    return items.map((item, index) => {
      return { ...item, index: index };
    });
  });

  constructor(props: ISwatchColorPickerProps) {
    super(props);

    this._id = props.id || getId('swatchColorPicker');

    if (process.env.NODE_ENV !== 'production') {
      warnMutuallyExclusive(COMPONENT_NAME, props, {
        focusOnHover: 'onHover',
        defaultSelectedId: 'selectedId'
      });

      warnConditionallyRequiredProps(COMPONENT_NAME, props, ['focusOnHover'], 'mouseLeaveParentSelector', !!props.mouseLeaveParentSelector);

      warnDeprecations(COMPONENT_NAME, props, {
        positionInSet: 'ariaPosInSet',
        setSize: 'ariaSetSize'
      });
    }

    let selectedIndex: number | undefined;
    if (props.selectedId) {
      selectedIndex = this._getSelectedIndex(props.colorCells, props.selectedId || props.defaultSelectedId);
    }

    this.state = {
      selectedIndex
    };
  }

  public componentDidUpdate(prevProps: Readonly<ISwatchColorPickerProps>): void {
    const { selectedId, colorCells } = this.props;
    if (selectedId !== undefined && selectedId !== prevProps.selectedId) {
      this.setState({
        selectedIndex: this._getSelectedIndex(colorCells, selectedId)
      });
    }
  }

  public componentWillUnmount() {
    if (this.props.onCellFocused && this._cellFocused) {
      this._cellFocused = false;
      this.props.onCellFocused();
    }
  }

  public render(): JSX.Element | null {
    const props = this.props;
    const { colorCells, columnCount, className, styles, cellMargin } = props;

    const classNames = getClassNames(styles!, {
      theme: props.theme!,
      className,
      cellMargin
    });

    if (colorCells.length < 1 || columnCount < 1) {
      return null;
    }
    return (
      <Grid
        {...props}
        id={this._id}
        items={this._getItemsWithIndex(colorCells)}
        onRenderItem={this._renderOption}
        onBlur={this._onSwatchColorPickerBlur}
        theme={props.theme!}
        styles={classNames}
      />
    );
  }

  /**
   * When the whole swatchColorPicker is blurred,
   * make sure to clear the pending focused stated
   */
  private _onSwatchColorPickerBlur = (): void => {
    if (this.props.onCellFocused) {
      this._cellFocused = false;
      this.props.onCellFocused();
    }
  };

  /**
   * Get the selected item's index
   * @param items - The items to search
   * @param selectedId - The selected item's id to find
   * @returns - The index of the selected item's id, -1 if there was no match
   */
  private _getSelectedIndex(items: IColorCellProps[], selectedId?: string): number | undefined {
    if (selectedId === undefined) {
      return undefined;
    }
    const selectedIndex = findIndex(items, item => item.id === selectedId);
    return selectedIndex >= 0 ? selectedIndex : undefined;
  }

  /**
   * Render a color cell
   * @param item - The item to render
   * @returns - Element representing the item
   */
  private _renderOption = (item: IColorCellProps): JSX.Element => {
    const props = this.props;
    const id = this._id;

    return (
      <ColorPickerGridCell
        item={item}
        idPrefix={id}
        color={item.color}
        styles={props.getColorGridCellStyles}
        disabled={props.disabled}
        onClick={this._onCellClick}
        onHover={this._onGridCellHovered}
        onFocus={this._onGridCellFocused}
        selected={this.state.selectedIndex !== undefined && this.state.selectedIndex === item.index}
        circle={props.cellShape === 'circle'}
        label={item.label}
        onMouseEnter={this._onMouseEnter}
        onMouseMove={this._onMouseMove}
        onMouseLeave={this._onMouseLeave}
        height={props.cellHeight}
        width={props.cellWidth}
        borderWidth={props.cellBorderWidth}
      />
    );
  };

  /**
   * Callback passed to the GridCell that will manage triggering the onCellHovered callback for mouseEnter
   */
  private _onMouseEnter = (ev: React.MouseEvent<HTMLButtonElement>): boolean => {
    if (!this.props.focusOnHover) {
      return !!this.props.disabled;
    }

    if (!this.props.disabled) {
      ev.currentTarget.focus();
    }

    return true;
  };

  /**
   * Callback passed to the GridCell that will manage Hover/Focus updates
   */
  private _onMouseMove = (ev: React.MouseEvent<HTMLButtonElement>): boolean => {
    if (!this.props.focusOnHover) {
      return !!this.props.disabled;
    }

    const targetElement = ev.currentTarget as HTMLElement;

    // If the targetElement is the focused element bail out
    if (typeof document !== 'undefined' && targetElement !== (document.activeElement as HTMLElement)) {
      targetElement.focus();
    }

    return true;
  };

  /**
   * Callback passed to the GridCell that will manage Hover/Focus updates
   */
  private _onMouseLeave = (ev: React.MouseEvent<HTMLButtonElement>): boolean => {
    const parentSelector = this.props.mouseLeaveParentSelector;

    if (!this.props.focusOnHover || !parentSelector || this.props.disabled) {
      return false;
    }

    // Get the elements that match the given selector
    const elements = document.querySelectorAll(parentSelector);

    // iterate over the elements return to make sure it is a parent of the target and focus it
    for (let index = 0; index < elements.length; index += 1) {
      if (elements[index].contains(ev.currentTarget)) {
        /**
         * IE11 focus() method forces parents to scroll to top of element.
         * Edge and IE expose a setActive() function for focusable divs that
         * sets the page focus but does not scroll the parent element.
         */
        if ((elements[index] as any).setActive) {
          try {
            (elements[index] as any).setActive();
          } catch (e) {
            /* no-op */
          }
        } else {
          (elements[index] as HTMLElement).focus();
        }

        // TODO: should this return true?
        break;
      }
    }

    return false;
  };

  /**
   * Callback passed to the GridCell class that will trigger the onCellHovered callback of the SwatchColorPicker
   * NOTE: This will not be triggered if shouldFocusOnHover === true
   */
  private _onGridCellHovered = (item?: IColorCellProps): void => {
    const { onCellHovered } = this.props;

    if (onCellHovered) {
      return item ? onCellHovered(item.id, item.color) : onCellHovered();
    }
  };

  /**
   * Callback passed to the GridCell class that will trigger the onCellFocus callback of the SwatchColorPicker
   */
  private _onGridCellFocused = (item?: IColorCellProps): void => {
    const { onCellFocused } = this.props;
    if (onCellFocused) {
      if (item) {
        this._cellFocused = true;
        return onCellFocused(item.id, item.color);
      } else {
        this._cellFocused = false;
        return onCellFocused();
      }
    }
  };

  /**
   * Handle the click on a cell
   * @param item - The cell that the click was fired against
   */
  private _onCellClick = (item: IColorCellProps): void => {
    if (this.props.disabled) {
      return;
    }

    const index = item.index as number;

    // If we have a valid index and it is not already
    // selected, select it
    if (index >= 0 && index !== this.state.selectedIndex) {
      if (this.props.onCellFocused && this._cellFocused) {
        this._cellFocused = false;
        this.props.onCellFocused();
      }

      if (this.props.onColorChanged) {
        this.props.onColorChanged(item.id, item.color);
      }

      // Update internal state only if the component is uncontrolled
      if (this.props.isControlled !== true) {
        this.setState({
          selectedIndex: index
        });
      }
    }
  };
}
