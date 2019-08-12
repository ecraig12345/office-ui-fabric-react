import * as React from 'react';
import { ContextualMenuItemType, IContextualMenuItemProps } from 'office-ui-fabric-react/lib/ContextualMenu';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyleSets, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { css } from 'office-ui-fabric-react/lib/Utilities';

const theme = getTheme();
const classNames = mergeStyleSets({
  iconContainer: {
    position: 'relative',
    margin: '0 4px',
    height: 32,
    width: 14
  },
  logoIcon: {
    position: 'absolute',
    left: 0,
    right: 0,
    color: theme.palette.themeDarkAlt
  },
  logoFillIcon: {
    color: theme.palette.white
  }
});

// tslint:disable:jsx-no-lambda
export const ContextualMenuIconExample: React.FunctionComponent = () => {
  const [showCallout, setShowCallout] = React.useState<boolean>(false);

  return (
    <div>
      <DefaultButton
        text="Click for ContextualMenu"
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: 'openInWord',
              text: 'Open in Word',
              onRenderIcon: (props: IContextualMenuItemProps) => {
                return (
                  <span className={classNames.iconContainer}>
                    <Icon iconName="WordLogoFill16" className={css(classNames.logoIcon, classNames.logoFillIcon)} />
                    <Icon iconName="WordLogo16" className={classNames.logoIcon} />
                  </span>
                );
              }
            },
            {
              key: 'newItem',
              iconProps: {
                iconName: 'Add'
              },
              text: 'New'
            },
            {
              key: 'upload',
              onClick: () => setShowCallout(true),
              iconProps: {
                iconName: 'Upload',
                style: {
                  color: 'salmon'
                }
              },
              text: 'Upload (Click for popup)',
              title: 'Upload a file'
            },
            {
              key: 'divider_1',
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: 'share',
              iconProps: {
                iconName: 'Share'
              },
              text: 'Share'
            },
            {
              key: 'print',
              iconProps: {
                iconName: 'Print'
              },
              text: 'Print'
            },
            {
              key: 'music',
              iconProps: {
                iconName: 'MusicInCollectionFill'
              },
              text: 'Music'
            }
          ]
        }}
      />
      {showCallout && (
        <Callout setInitialFocus={true} onDismiss={() => setShowCallout(false)}>
          <DefaultButton onClick={() => setShowCallout(false)} text="Hello Popup" />
        </Callout>
      )}
    </div>
  );
};
