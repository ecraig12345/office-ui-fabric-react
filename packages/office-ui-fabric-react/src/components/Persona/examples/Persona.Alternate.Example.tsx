import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TestImages } from '@uifabric/example-data';

const examplePersona: IPersonaSharedProps = {
  imageUrl: TestImages.personaMale,
  imageInitials: 'AR',
  text: 'Annie Reid',
  secondaryText: 'Designer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  showSecondaryText: true
};
const stackTokens = { childrenGap: 10 };

export const PersonaAlternateExample: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Persona {...examplePersona} size={PersonaSize.size24} presence={PersonaPresence.none} />
      <Persona {...examplePersona} size={PersonaSize.size28} presence={PersonaPresence.none} />
      <Persona {...examplePersona} size={PersonaSize.size32} presence={PersonaPresence.online} />
    </Stack>
  );
};
