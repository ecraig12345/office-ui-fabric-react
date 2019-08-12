import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react';

export const ButtonAnchorExample: React.FunctionComponent<IButtonProps> = props => {
  const { disabled, checked } = props;

  return (
    <DefaultButton
      disabled={disabled}
      checked={checked}
      href="http://bing.com"
      target="_blank"
      title="let us bing!"
      styles={{ root: { margin: '10px 0' } }}
    >
      Bing
    </DefaultButton>
  );
};
