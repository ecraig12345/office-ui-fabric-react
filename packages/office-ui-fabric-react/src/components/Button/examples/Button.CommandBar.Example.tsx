import * as React from 'react';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

export const ButtonCommandBarExample: React.FunctionComponent<IButtonProps> = props => {
  const { disabled, checked } = props;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'stretch', height: '44px' }}>
        <CommandBarButton
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
        <CommandBarButton
          disabled={disabled}
          checked={checked}
          iconProps={{ iconName: 'Add' }}
          text="Create account"
          split={true}
          onClick={alertClicked}
          menuProps={{
            items: [
              {
                key: 'emailMessage',
                name: 'Email message',
                icon: 'Mail'
              },
              {
                key: 'calendarEvent',
                name: 'Calendar event',
                icon: 'Calendar'
              }
            ]
          }}
        />
        <CommandBarButton
          data-automation-id="test2"
          disabled={disabled}
          checked={checked}
          iconProps={{ iconName: 'Mail' }}
          text="Send Mail"
        />
      </div>
    </div>
  );
};

function alertClicked() {
  alert('Clicked');
}
