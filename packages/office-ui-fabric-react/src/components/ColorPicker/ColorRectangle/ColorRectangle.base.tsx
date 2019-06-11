import * as React from 'react';
import { BaseComponent, classNamesFunction } from '../../../Utilities';
import { IColor } from '../../../utilities/color/interfaces';
import { MAX_COLOR_SATURATION, MAX_COLOR_VALUE } from '../../../utilities/color/consts';
import { getFullColorString } from '../../../utilities/color/getFullColorString';
import { updateSV } from '../../../utilities/color/updateSV';
import { clamp } from '../../../utilities/color/clamp';
import { IColorRectangleProps, IColorRectangleStyleProps, IColorRectangleStyles, IColorRectangle } from './ColorRectangle.types';
import { getColorFromString } from '../../../utilities/color/getColorFromString';

const getClassNames = classNamesFunction<IColorRectangleStyleProps, IColorRectangleStyles>();

export interface IColorRectangleState {
  /** Current color if the rectangle is an uncontrolled component (`props.color` not provided) */
  uncontrolledColor: IColor;
}

/**
 * {@docCategory ColorPicker}
 */
export class ColorRectangleBase extends BaseComponent<IColorRectangleProps, IColorRectangleState> implements IColorRectangle {
  public static defaultProps = {
    minSize: 220
  };

  private _root = React.createRef<HTMLDivElement>();

  constructor(props: IColorRectangleProps) {
    super(props);

    this._warnDeprecations({
      onSVChanged: 'onChange'
    });

    this._warnMutuallyExclusive({
      color: 'defaultColor'
    });

    this._warnConditionallyRequiredProps(['onChange'], 'color', props.color !== undefined);

    this.state = {
      uncontrolledColor: props.defaultColor || getColorFromString('#fff')!
    };
  }

  public get color(): IColor {
    // props.color ALWAYS overrides state.uncontrolledColor if provided
    return this.props.color || this.state.uncontrolledColor;
  }

  public render(): JSX.Element {
    const { minSize, theme, className, styles } = this.props;
    const color = this.color;

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <div
        ref={this._root}
        className={classNames.root}
        style={{ minWidth: minSize, minHeight: minSize, backgroundColor: getFullColorString(color) }}
        onMouseDown={this._onMouseDown}
      >
        <div className={classNames.light} />
        <div className={classNames.dark} />
        <div
          className={classNames.thumb}
          style={{ left: `${color.s}%`, top: `${MAX_COLOR_VALUE - color.v}%`, backgroundColor: color.str }}
        />
      </div>
    );
  }

  private _onMouseDown = (ev: React.MouseEvent<HTMLElement>): void => {
    this._events.on(window, 'mousemove', this._onMouseMove, true);
    this._events.on(window, 'mouseup', this._disableEvents, true);

    this._onMouseMove(ev);
  };

  private _onMouseMove = (ev: React.MouseEvent<HTMLElement>): void => {
    const { onSVChanged, onChange } = this.props;

    if (!this._root.current) {
      return;
    }

    // If the primary button (1) isn't pressed, the user is no longer dragging, so turn off the
    // event handlers and exit. (this may only be relevant while debugging)
    // tslint:disable-next-line:no-bitwise
    if (!(ev.buttons & 1)) {
      this._disableEvents();
      return;
    }

    const newColor = _getNewColor(ev, this.color, this._root.current);
    if (newColor) {
      if (onChange) {
        onChange(ev, newColor);
      }

      if (onSVChanged) {
        onSVChanged(newColor.s, newColor.v);
      }

      if (this.props.color === undefined) {
        // Only update state if a color is not provided in props
        this.setState({ uncontrolledColor: newColor });
      }
    }

    ev.preventDefault();
    ev.stopPropagation();
  };

  private _disableEvents = (): void => {
    this._events.off();
  };
}

/**
 * Exported for testing only.
 * @internal
 */
export function _getNewColor(ev: React.MouseEvent<HTMLElement>, prevColor: IColor, root: HTMLElement): IColor | undefined {
  const rectSize = root.getBoundingClientRect();

  const sPercentage = (ev.clientX - rectSize.left) / rectSize.width;
  const vPercentage = (ev.clientY - rectSize.top) / rectSize.height;

  return updateSV(
    prevColor,
    clamp(sPercentage * MAX_COLOR_SATURATION, MAX_COLOR_SATURATION),
    clamp(MAX_COLOR_VALUE - vPercentage * MAX_COLOR_VALUE, MAX_COLOR_VALUE)
  );
}
