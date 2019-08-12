import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Facepile } from 'office-ui-fabric-react/lib/Facepile';
import { PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { facepilePersonas } from 'office-ui-fabric-react/lib/components/Facepile/examples/FacepileExampleData';

export interface IFacepileBasicExampleState {
  numberOfFaces: number;
  imagesFadeIn: boolean;
  personaSize: PersonaSize;
}

const controlStyles = {
  root: { width: 200, marginTop: 0 },
  label: { paddingTop: 0 }
};

export const FacepileBasicExample: React.FunctionComponent = () => {
  // tslint:disable:jsx-no-lambda
  const [numberOfFaces, setNumberOfFaces] = React.useState<number>(3);
  const [imagesFadeIn, setImagesFadeIn] = React.useState<boolean>(false);
  const [personaSize, setPersonaSize] = React.useState<PersonaSize>(PersonaSize.size32);

  return (
    <div>
      <Facepile
        personaSize={personaSize}
        personas={facepilePersonas.slice(0, numberOfFaces)}
        overflowPersonas={facepilePersonas.slice(numberOfFaces)}
        getPersonaProps={() => ({
          imageShouldFadeIn: imagesFadeIn
        })}
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
          value={numberOfFaces}
          onChange={setNumberOfFaces}
          styles={controlStyles}
        />
        <Dropdown
          label="Persona Size:"
          selectedKey={personaSize}
          options={[
            { key: PersonaSize.size16, text: PersonaSize[PersonaSize.size16] },
            { key: PersonaSize.size24, text: PersonaSize[PersonaSize.size24] },
            { key: PersonaSize.size28, text: PersonaSize[PersonaSize.size28] },
            { key: PersonaSize.size32, text: PersonaSize[PersonaSize.size32] },
            { key: PersonaSize.size40, text: PersonaSize[PersonaSize.size40] }
          ]}
          onChange={(event: React.FormEvent<HTMLDivElement>, value: IDropdownOption) => {
            setPersonaSize(value.key as PersonaSize);
          }}
          styles={controlStyles}
        />
        <Toggle
          label="Fade In"
          checked={imagesFadeIn}
          onChange={(ev: React.FormEvent<HTMLElement | HTMLInputElement>, checked: boolean) => {
            setImagesFadeIn(checked);
          }}
          styles={controlStyles}
        />
      </Stack>
    </div>
  );
};
