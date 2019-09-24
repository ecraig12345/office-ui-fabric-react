import * as React from 'react';

import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { useToggle } from '@uifabric/react-hooks';

const stackTokens = { childrenGap: 15 };
const textFieldStyles = { root: { width: 300 } };

export const FocusTrapZoneBoxClickExample: React.FunctionComponent = () => {
  const [useTrapZone, toggleUseTrapZone] = useToggle(false);

  const stackStyles = React.useMemo(
    () => ({
      root: { border: `2px dashed ${useTrapZone ? '#ababab' : 'transparent'}`, padding: 10 }
    }),
    [useTrapZone]
  );

  return (
    <FocusTrapZone disabled={!useTrapZone} isClickableOutsideFocusTrap={true} forceFocusInsideTrap={false}>
      <Stack horizontalAlign="start" tokens={stackTokens} styles={stackStyles}>
        <Toggle label="Use trap zone" checked={useTrapZone} onChange={toggleUseTrapZone} onText="On (toggle to exit)" offText="Off" />

        <TextField label="Input inside trap zone" styles={textFieldStyles} />

        <Link href="https://bing.com" target="_blank">
          Hyperlink inside trap zone
        </Link>
      </Stack>
    </FocusTrapZone>
  );
};
