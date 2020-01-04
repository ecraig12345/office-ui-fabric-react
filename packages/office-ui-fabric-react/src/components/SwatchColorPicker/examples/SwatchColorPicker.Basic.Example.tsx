import * as React from 'react';
import { SwatchColorPicker, IColorCellProps, Label } from 'office-ui-fabric-react';
import { useId } from '@uifabric/react-hooks';

const colorCells: IColorCellProps[] = [
  { id: 'a', label: 'orange', color: '#ca5010' },
  { id: 'b', label: 'cyan', color: '#038387' },
  { id: 'c', label: 'blueMagenta', color: '#8764b8' },
  { id: 'd', label: 'magenta', color: '#881798' },
  { id: 'e', label: 'white', color: '#ffffff' }
];

export const SwatchColorPickerBasicExample: React.FunctionComponent = () => {
  // Unique IDs for each example SwatchColorPicker
  const label1Id = useId('SwatchExample');
  const label2Id = useId('SwatchExample');
  const label3Id = useId('SwatchExample');
  const label4Id = useId('SwatchExample');

  return (
    <div>
      <Label id={label1Id}>Circle cells with default size of 20px</Label>
      <SwatchColorPicker columnCount={5} cellShape="circle" colorCells={colorCells} ariaLabelledBy={label1Id} />

      <Label id={label2Id}>Square cells with default size of 20px</Label>
      <SwatchColorPicker columnCount={5} cellShape="square" colorCells={colorCells} ariaLabelledBy={label2Id} />

      <Label id={label3Id}>Square cells with custom size of 35px and a default selected item</Label>
      <SwatchColorPicker
        columnCount={5}
        cellHeight={35}
        cellWidth={35}
        defaultSelectedId="c"
        cellShape="square"
        colorCells={colorCells}
        ariaLabelledBy={label3Id}
      />

      <Label id={label4Id}>Disabled</Label>
      <SwatchColorPicker
        disabled={true}
        columnCount={5}
        defaultSelectedId="c"
        cellShape="circle"
        colorCells={colorCells}
        ariaLabelledBy={label4Id}
      />
    </div>
  );
};
