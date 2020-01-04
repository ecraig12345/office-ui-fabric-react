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

export const SwatchColorPickerControlledExample: React.FunctionComponent = () => {
  const labelId = useId('SwatchExample');
  const [selectedCell, setSelectedCell] = React.useState<string>();

  return (
    <div>
      <Label id={labelId}>Controlled SwatchColorPicker</Label>
      <SwatchColorPicker
        ariaLabelledBy={labelId}
        selectedId={selectedCell}
        onColorChanged={setSelectedCell}
        // Temporary workaround to make the component fully controllable without a breaking change
        isControlled
        columnCount={5}
        cellShape="circle"
        colorCells={colorCells}
      />
    </div>
  );
};
