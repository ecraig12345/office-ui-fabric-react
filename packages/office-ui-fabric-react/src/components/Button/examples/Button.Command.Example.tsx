import * as React from 'react';
import { CommandButton, IButtonProps, ILabelStyles, Label, Stack } from 'office-ui-fabric-react';

const labelStyles: Partial<ILabelStyles> = {
  root: { marginBottom: 10 }
};

export const ButtonCommandExample: React.FunctionComponent<IButtonProps> = props => {
  const { disabled, checked } = props;
  return (
    <Stack horizontal tokens={{ childrenGap: 40 }}>
      <div>
        <Label styles={labelStyles}>CommandButton that focuses on menu</Label>
        <CommandButton
          disabled={disabled}
          checked={checked}
          iconProps={{ iconName: 'Add' }}
          text="Create account"
          menuProps={{
            items: [
              {
                key: 'emailMessage',
                text: 'Email message',
                iconProps: { iconName: 'Mail' }
              },
              {
                key: 'calendarEvent',
                text: 'Calendar event',
                iconProps: { iconName: 'Calendar' }
              }
            ]
          }}
        />
      </div>
      <div>
        <Label styles={labelStyles}>CommandButton that doesn't focus on menu</Label>
        <CommandButton
          disabled={disabled}
          checked={checked}
          iconProps={{ iconName: 'Add' }}
          text="Create account"
          menuProps={{
            shouldFocusOnMount: false,
            items: [
              {
                key: 'emailMessage',
                text: 'Email message',
                iconProps: { iconName: 'Mail' }
              },
              {
                key: 'calendarEvent',
                text: 'Calendar event',
                iconProps: { iconName: 'Calendar' }
              }
            ]
          }}
        />
      </div>
    </Stack>
  );
};
