import * as React from 'react';
import {
  IPersonaProps,
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
  IPersonaStyles
} from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from '@uifabric/example-data';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const customCoinClass = mergeStyles({
  borderRadius: 20,
  display: 'block'
});
const personaStyles: Partial<IPersonaStyles> = { root: { marginTop: 10 } };

const examplePersona: IPersonaSharedProps = {
  imageInitials: 'TR',
  text: 'Ted Randall',
  secondaryText: 'Project Manager',
  optionalText: 'Available at 4:00pm'
};

export const PersonaCustomCoinRenderExample: React.FunctionComponent = () => {
  return (
    <div>
      Custom render function in place of persona coin's image
      <Persona
        {...examplePersona}
        size={PersonaSize.size72}
        presence={PersonaPresence.online}
        onRenderCoin={_onRenderCoin}
        imageAlt="Custom Coin Image"
        imageUrl={TestImages.personaMale}
        coinSize={72}
        styles={personaStyles}
      />
    </div>
  );
};

function _onRenderCoin(props: IPersonaProps): JSX.Element {
  const { coinSize, imageAlt, imageUrl } = props;
  return <img src={imageUrl} alt={imageAlt} width={coinSize} height={coinSize} className={customCoinClass} />;
}
