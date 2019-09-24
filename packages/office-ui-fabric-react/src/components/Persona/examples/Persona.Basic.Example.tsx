import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TestImages } from '@uifabric/example-data';
import { useToggle } from '@uifabric/react-hooks';

const examplePersona: IPersonaSharedProps = {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};

export const PersonaBasicExample: React.FunctionComponent = () => {
  const [renderDetails, toggleRenderDetails] = useToggle(true);

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Toggle label="Include persona details" inlineLabel checked={renderDetails} onChange={toggleRenderDetails} />

      <Label>Size 8 Persona, with no presence</Label>
      <Persona {...examplePersona} size={PersonaSize.size8} hidePersonaDetails={!renderDetails} />

      <Label>Size 8 Persona, with presence</Label>
      <Persona {...examplePersona} size={PersonaSize.size8} presence={PersonaPresence.offline} hidePersonaDetails={!renderDetails} />

      <Label>Size 24 Persona</Label>
      <Persona {...examplePersona} size={PersonaSize.size24} presence={PersonaPresence.online} hidePersonaDetails={!renderDetails} />

      <Label>Size 32 Persona</Label>
      <Persona {...examplePersona} size={PersonaSize.size32} presence={PersonaPresence.online} hidePersonaDetails={!renderDetails} />

      <Label>Size 40 Persona</Label>
      <Persona {...examplePersona} size={PersonaSize.size40} presence={PersonaPresence.away} hidePersonaDetails={!renderDetails} />

      <Label>Size 48 Persona (default) </Label>
      <Persona {...examplePersona} hidePersonaDetails={!renderDetails} presence={PersonaPresence.busy} />

      <Label>Size 56 Persona (default) </Label>
      <Persona {...examplePersona} size={PersonaSize.size56} hidePersonaDetails={!renderDetails} presence={PersonaPresence.online} />

      <Label>Size 72 Persona</Label>
      <Persona {...examplePersona} size={PersonaSize.size72} presence={PersonaPresence.dnd} hidePersonaDetails={!renderDetails} />

      <Label>Size 100 Persona</Label>
      <Persona {...examplePersona} size={PersonaSize.size100} presence={PersonaPresence.blocked} hidePersonaDetails={!renderDetails} />

      <Label>Size 120 Persona</Label>
      <Persona {...examplePersona} size={PersonaSize.size120} presence={PersonaPresence.away} hidePersonaDetails={!renderDetails} />
    </Stack>
  );
};
