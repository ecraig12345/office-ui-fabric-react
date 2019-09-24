import * as React from 'react';
import {
  IPersonaProps,
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
  IPersonaStyles
} from 'office-ui-fabric-react/lib/Persona';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { TestImages } from '@uifabric/example-data';

const examplePersona: IPersonaSharedProps = {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};
const personaStyles: Partial<IPersonaStyles> = { root: { marginTop: 10 } };
const iconClass = mergeStyles({ marginRight: 5 });

export const PersonaCustomRenderExample: React.FunctionComponent = () => {
  return (
    <div>
      Custom icon in secondary text
      <Persona
        {...examplePersona}
        size={PersonaSize.size72}
        presence={PersonaPresence.offline}
        onRenderSecondaryText={_onRenderSecondaryText}
        styles={personaStyles}
      />
    </div>
  );
};

function _onRenderSecondaryText(props: IPersonaProps): JSX.Element {
  return (
    <div>
      <FontIcon iconName="Suitcase" className={iconClass} />
      {props.secondaryText}
    </div>
  );
}
