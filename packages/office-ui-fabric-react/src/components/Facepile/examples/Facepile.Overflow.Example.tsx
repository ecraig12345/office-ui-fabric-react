import * as React from 'react';
import { Facepile, OverflowButtonType } from 'office-ui-fabric-react/lib/Facepile';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { facepilePersonas } from 'office-ui-fabric-react/lib/components/Facepile/examples/FacepileExampleData';

export interface IFacepileOverflowExampleState {
  displayedPersonas: number;
  overflowButtonType: OverflowButtonType;
}

const controlStyles = {
  root: { width: 200, marginTop: 0 },
  label: { paddingTop: 0 }
};

export const FacepileOverflowExample: React.FunctionComponent = () => {
  const [displayedPersonas, setDisplayedPersonas] = React.useState<number>(5);
  const [overflowButtonType, setOverflowButtonType] = React.useState<OverflowButtonType>(OverflowButtonType.none);

  return (
    <div>
      <Facepile
        personas={facepilePersonas}
        maxDisplayablePersonas={displayedPersonas}
        overflowButtonType={overflowButtonType}
        overflowButtonProps={{
          ariaLabel: 'More users',
          onClick: (ev: React.MouseEvent<HTMLButtonElement>) => alert('overflow icon clicked')
        }}
        ariaDescription="To move through the items use left and right arrow keys."
        styles={{ root: { marginBottom: 30 } }}
      />
      <Stack horizontal verticalAlign="start" tokens={{ childrenGap: 40 }}>
        <Slider
          label="Number of Personas:"
          min={1}
          max={5}
          step={1}
          showValue={true}
          value={displayedPersonas}
          onChange={setDisplayedPersonas}
          styles={controlStyles}
        />
        <Dropdown
          label="Overflow Button Type:"
          selectedKey={overflowButtonType}
          options={[
            { key: OverflowButtonType.none, text: OverflowButtonType[OverflowButtonType.none] },
            { key: OverflowButtonType.descriptive, text: OverflowButtonType[OverflowButtonType.descriptive] },
            { key: OverflowButtonType.downArrow, text: OverflowButtonType[OverflowButtonType.downArrow] },
            { key: OverflowButtonType.more, text: OverflowButtonType[OverflowButtonType.more] }
          ]}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={(event: React.FormEvent<HTMLDivElement>, value: IDropdownOption) => {
            setOverflowButtonType(value.key as OverflowButtonType);
          }}
          styles={controlStyles}
        />
      </Stack>
    </div>
  );
};
