import * as React from 'react';
import { getId, toMatrix, classNamesFunction, getNativeProps, htmlElementProperties, initializeComponentRef } from '../../Utilities';
import { FocusZone } from '../../FocusZone';
import { IGrid, IGridProps, IGridStyleProps, IGridStyles } from './Grid.types';

const getClassNames = classNamesFunction<IGridStyleProps, IGridStyles>();

export class GridBase extends React.Component<IGridProps, {}> implements IGrid {
  private _id: string;

  constructor(props: IGridProps) {
    super(props);
    initializeComponentRef(this);
    this._id = props.id || getId();
  }

  public render(): JSX.Element {
    const props = this.props;
    const {
      items,
      columnCount,
      onRenderItem,
      ariaLabelledBy,
      ariaPosInSet = props.positionInSet,
      ariaSetSize = props.setSize,
      styles
    } = props;

    const htmlProps = getNativeProps<React.HTMLAttributes<HTMLTableElement>>(props, htmlElementProperties, ['onBlur']);

    const classNames = getClassNames(styles!, { theme: props.theme! });

    // Array to store the cells in the correct row index
    const rowsOfItems: any[][] = toMatrix(items, columnCount);

    const content = (
      <table
        aria-labelledby={ariaLabelledBy}
        aria-posinset={ariaPosInSet}
        aria-setsize={ariaSetSize}
        id={this._id}
        role="grid"
        {...htmlProps}
        className={classNames.root}
      >
        <tbody>
          {rowsOfItems.map((rows: any[], rowIndex: number) => (
            // Using indices as keys is generally not recommended but is unavoidable here since we
            // don't know about any properties of the items
            <tr role="row" key={rowIndex}>
              {rows.map((cell: any, cellIndex: number) => (
                <td role="presentation" key={cellIndex} className={classNames.tableCell}>
                  {onRenderItem(cell, cellIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

    // Create the table/grid
    return props.doNotContainWithinFocusZone ? (
      content
    ) : (
      <FocusZone isCircularNavigation={props.shouldFocusCircularNavigate} className={classNames.focusedContainer} onBlur={props.onBlur}>
        {content}
      </FocusZone>
    );
  }
}
