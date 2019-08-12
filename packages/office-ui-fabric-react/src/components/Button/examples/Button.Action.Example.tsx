import * as React from 'react';
import { ActionButton, IButtonProps } from 'office-ui-fabric-react';

export const ButtonActionExample: React.FunctionComponent<IButtonProps> = props => {
  const { disabled, checked } = props;

  return (
    <ActionButton
      iconProps={{ iconName: 'AddFriend' }}
      allowDisabledFocus={true}
      disabled={disabled}
      checked={checked}
      styles={{ root: { margin: '10px 0' } }}
    >
      Create account
    </ActionButton>
  );
};
