import * as React from 'react';
import { IButtonProps, PrimaryButton } from 'office-ui-fabric-react';

export const ButtonPrimaryExample: React.FunctionComponent<IButtonProps> = props => {
  const { disabled, checked } = props;

  return (
    <PrimaryButton
      disabled={disabled}
      checked={checked}
      text="Create account"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => alert('Clicked')}
    />
  );
};
