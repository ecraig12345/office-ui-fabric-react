import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

// tslint:disable:jsx-no-lambda
export const ButtonToggleExample: React.FunctionComponent<IButtonProps> = props => {
  const { disabled, checked } = props;
  const [muted, setMuted] = React.useState<boolean>(false);

  return (
    <DefaultButton
      allowDisabledFocus={true}
      disabled={disabled}
      toggle={true}
      checked={muted || checked}
      text={muted ? 'Volume Muted' : 'Volume Unmuted'}
      onClick={() => {
        setMuted(!muted);
      }}
    />
  );
};
