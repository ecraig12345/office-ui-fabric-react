import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export const ContextualMenuSubmenuExample: React.FunctionComponent = () => {
  const [hoverDelay, setHoverDelay] = React.useState<number>(250);
  return (
    <div>
      <TextField
        value={String(hoverDelay)}
        label="Hover delay (ms)"
        type="number"
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(ev: any, value?: string) => setHoverDelay(Number(value) || hoverDelay)}
        styles={{
          root: { marginBottom: 20 },
          fieldGroup: { width: 75 }
        }}
      />
      <DefaultButton
        text="Click for ContextualMenu"
        menuProps={{
          shouldFocusOnMount: true,
          subMenuHoverDelay: hoverDelay,
          items: [
            {
              key: 'newItem',
              text: 'New',
              href: 'https://bing.com',
              target: '_blank',
              subMenuProps: {
                items: [
                  {
                    key: 'emailMessage',
                    text: 'Email message',
                    title: 'Create an email'
                  },
                  {
                    key: 'calendarEvent',
                    text: 'Calendar event',
                    title: 'Create a calendar event'
                  }
                ]
              }
            },
            {
              key: 'share',
              text: 'Share',
              subMenuProps: {
                items: [
                  {
                    key: 'sharetotwitter',
                    text: 'Share to Twitter'
                  },
                  {
                    key: 'sharetofacebook',
                    text: 'Share to Facebook'
                  },
                  {
                    key: 'sharetoemail',
                    text: 'Share to Email',
                    subMenuProps: {
                      items: [
                        {
                          key: 'sharetooutlook_1',
                          text: 'Share to Outlook',
                          title: 'Share to Outlook'
                        },
                        {
                          key: 'sharetogmail_1',
                          text: 'Share to Gmail',
                          title: 'Share to Gmail'
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              key: 'shareSplit',
              text: 'Share w/ Split',
              split: true,
              'aria-roledescription': 'split button',
              subMenuProps: {
                items: [
                  {
                    key: 'sharetotwittersplit',
                    text: 'Share to Twitter'
                  },
                  {
                    key: 'sharetofacebooksplit',
                    text: 'Share to Facebook'
                  },
                  {
                    key: 'sharetoemailsplit',
                    text: 'Share to Email',
                    subMenuProps: {
                      items: [
                        {
                          key: 'sharetooutlooksplit_1',
                          text: 'Share to Outlook',
                          title: 'Share to Outlook'
                        },
                        {
                          key: 'sharetogmailsplit_1',
                          text: 'Share to Gmail',
                          title: 'Share to Gmail'
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              key: 'shareSplitLeft',
              text: 'Disabled Split Option',
              split: true,
              disabled: true,
              'aria-roledescription': 'split button',
              subMenuProps: {
                items: [
                  {
                    key: 'sharetotwittersplit',
                    text: 'Share to Twitter'
                  },
                  {
                    key: 'sharetofacebooksplit',
                    text: 'Share to Facebook'
                  }
                ]
              }
            },
            {
              key: 'shareSplitDisabledPrimary',
              text: 'Option disabled, split enabled',
              split: true,
              primaryDisabled: true,
              'aria-roledescription': 'split button',
              subMenuProps: {
                items: [
                  {
                    key: 'sharetotwittersplit',
                    text: 'Share to Twitter'
                  },
                  {
                    key: 'sharetofacebooksplit',
                    text: 'Share to Facebook'
                  }
                ]
              }
            }
          ]
        }}
      />
    </div>
  );
};
