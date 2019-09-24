import * as React from 'react';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { useBoolean } from '@uifabric/react-hooks';

const outerStackTokens = { childrenGap: 8 };
const innerStackTokens = { childrenGap: 15 };
const textFieldStyles = { root: { width: 300 } };
const _focusClassName = 'shouldFocusInput';

export const FocusTrapZoneBoxCustomElementExample: React.FunctionComponent = () => {
  const [isTrapZoneEnabled, enableTrapZone, disableTrapZone] = useBoolean(false);

  const innerStackStyles = React.useMemo(
    () => ({
      root: { border: `2px solid ${isTrapZoneEnabled ? '#ababab' : 'transparent'}`, padding: 10 }
    }),
    [isTrapZoneEnabled]
  );

  return (
    <Stack tokens={outerStackTokens}>
      <Stack.Item>
        <Text>If this button is used to enable FocusTrapZone, the hyperlink should be focused.</Text>
      </Stack.Item>
      <Stack.Item>
        <DefaultButton onClick={enableTrapZone} text="Focus Custom Element" />
      </Stack.Item>
      <FocusTrapZone disabled={!isTrapZoneEnabled} firstFocusableSelector={_focusClassName}>
        <Stack horizontalAlign="start" tokens={innerStackTokens} styles={innerStackStyles}>
          <Toggle
            label="Use trap zone"
            checked={isTrapZoneEnabled}
            onChange={isTrapZoneEnabled ? disableTrapZone : enableTrapZone}
            onText="On (toggle to exit)"
            offText="Off"
          />
          <TextField label="Input inside trap zone" styles={textFieldStyles} />
          <Link href="https://bing.com" className={_focusClassName} target="_blank">
            Hyperlink which will receive initial focus when trap zone is activated
          </Link>
        </Stack>
      </FocusTrapZone>
    </Stack>
  );
};
