import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { DirectionalHint, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { getRTL } from 'office-ui-fabric-react/lib/Utilities';

export interface IContextualMenuDirectionalExampleState {
  directionalHint?: DirectionalHint;
  directionalHintForRTL?: DirectionalHint;
  useDirectionalHintForRtl?: boolean;
  isBeakVisible?: boolean;
}

const DIRECTION_OPTIONS = [
  { key: DirectionalHint.topLeftEdge, text: 'Top Left Edge' },
  { key: DirectionalHint.topCenter, text: 'Top Center' },
  { key: DirectionalHint.topRightEdge, text: 'Top Right Edge' },
  { key: DirectionalHint.topAutoEdge, text: 'Top Auto Edge' },
  { key: DirectionalHint.bottomLeftEdge, text: 'Bottom Left Edge' },
  { key: DirectionalHint.bottomCenter, text: 'Bottom Center' },
  { key: DirectionalHint.bottomRightEdge, text: 'Bottom Right Edge' },
  { key: DirectionalHint.bottomAutoEdge, text: 'Bottom Auto Edge' },
  { key: DirectionalHint.leftTopEdge, text: 'Left Top Edge' },
  { key: DirectionalHint.leftCenter, text: 'Left Center' },
  { key: DirectionalHint.leftBottomEdge, text: 'Left Bottom Edge' },
  { key: DirectionalHint.rightTopEdge, text: 'Right Top Edge' },
  { key: DirectionalHint.rightCenter, text: 'Right Center' },
  { key: DirectionalHint.rightBottomEdge, text: 'Right Bottom Edge' }
];

// tslint:disable:jsx-no-lambda
export const ContextualMenuDirectionalExample: React.FunctionComponent = () => {
  const [isBeakVisible, setIsBeakVisible] = React.useState<boolean>(false);
  const [directionalHint, setDirectionalHint] = React.useState<DirectionalHint>(DirectionalHint.bottomLeftEdge);
  const [directionalHintForRTL, setDirectionalHintForRTL] = React.useState<DirectionalHint>(DirectionalHint.bottomLeftEdge);
  const [useDirectionalHintForRtl, setUseDirectionalHintForRtl] = React.useState<boolean>(false);

  return (
    <div>
      <Stack horizontal wrap tokens={{ childrenGap: 40 }} styles={{ root: { marginBottom: 20 } }}>
        <Toggle label="Show beak" checked={isBeakVisible} onChange={(ev: any, checked?: boolean) => setIsBeakVisible(!!checked)} />
        <Dropdown
          label="Directional hint"
          selectedKey={directionalHint!}
          options={DIRECTION_OPTIONS}
          onChange={(ev: any, option?: IDropdownOption) => setDirectionalHint(option!.key as DirectionalHint)}
        />
        {getRTL() && (
          <Toggle
            label="Use RTL directional hint"
            checked={useDirectionalHintForRtl}
            onChange={(ev: any, checked?: boolean) => setUseDirectionalHintForRtl(!!checked)}
          />
        )}
        {getRTL() && (
          <Dropdown
            label="Directional hint for RTL"
            selectedKey={directionalHintForRTL!}
            options={DIRECTION_OPTIONS}
            onChange={(ev: any, option?: IDropdownOption) => setDirectionalHintForRTL(option!.key as DirectionalHint)}
            disabled={!useDirectionalHintForRtl}
          />
        )}
      </Stack>
      <DefaultButton
        text="Show context menu"
        // The button is wide to make the effect of changing the directional hint more obvious
        styles={{ root: { width: 300 } }}
        menuProps={{
          isBeakVisible: isBeakVisible,
          directionalHint: directionalHint,
          directionalHintForRTL: useDirectionalHintForRtl ? directionalHintForRTL : undefined,
          gapSpace: 0,
          beakWidth: 20,
          directionalHintFixed: false,
          items: [
            {
              key: 'newItem',
              text: 'New'
            },
            {
              key: 'divider_1',
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: 'rename',
              text: 'Rename'
            },
            {
              key: 'edit',
              text: 'Edit'
            },
            {
              key: 'properties',
              text: 'Properties'
            },
            {
              key: 'disabled',
              text: 'Disabled item',
              disabled: true
            }
          ]
        }}
      />
    </div>
  );
};
