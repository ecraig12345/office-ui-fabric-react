import * as React from 'react';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import * as styles from './ColorTable.module.scss';

export interface IColorTableColor {
  name: string;
  value: string;
  labelColorClass: string;
}

export interface IColorTableProps {
  /**
   * Content for the table.
   */
  content: IColorTableColor[];
}

export class ColorTable extends React.PureComponent<IColorTableProps> {
  public render(): JSX.Element {
    const { content } = this.props;

    return (
      <table className={styles.table}>
        <thead className={styles.screenReaderOnly}>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {content.map(row => (
            <tr className={css('ms-bgColor-' + row.name, row.labelColorClass)} key={row.name}>
              <td>{row.name}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
