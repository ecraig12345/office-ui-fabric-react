import * as React from 'react';
import { SwatchColorPicker, IColorCellProps, Label } from 'office-ui-fabric-react';
import { useId, useConstCallback } from '@uifabric/react-hooks';

const colorCells: IColorCellProps[] = [
  { id: 'a', label: 'red', color: '#a4262c' },
  { id: 'b', label: 'orange', color: '#ca5010' },
  { id: 'c', label: 'orangeYellow', color: '#986f0b' },
  { id: 'd', label: 'yellowGreen', color: '#8cbd18' },
  { id: 'e', label: 'green', color: '#0b6a0b' },
  { id: 'f', label: 'cyan', color: '#038387' },
  { id: 'g', label: 'cyanBlue', color: '#004e8c' },
  { id: 'h', label: 'magenta', color: '#881798' },
  { id: 'i', label: 'magentaPink', color: '#9b0062' },
  { id: 'j', label: 'black', color: '#000000' },
  { id: 'k', label: 'gray', color: '#7a7574' },
  { id: 'l', label: 'gray20', color: '#69797e' }
];

export const SwatchColorPickerCustomExample: React.FunctionComponent = () => {
  const labelId = useId('SwatchExample');
  const [previewColor, setPreviewColor] = React.useState<string>();

  const updatePreview = useConstCallback((id?: string, newColor?: string) => setPreviewColor(newColor));

  return (
    <div>
      <Label id={labelId}>Multiple rows, larger cells, and a preview color which updates on hover or click</Label>
      <div
        style={{
          color: previewColor,
          fontSize: '24px',
          fontWeight: 'bold'
        }}
      >
        Sample text
      </div>
      <SwatchColorPicker
        ariaLabelledBy={labelId}
        onCellHovered={updatePreview}
        onCellFocused={updatePreview}
        columnCount={4}
        cellShape="circle"
        cellHeight={35}
        cellWidth={35}
        cellBorderWidth={3}
        colorCells={colorCells}
      />
    </div>
  );
};
