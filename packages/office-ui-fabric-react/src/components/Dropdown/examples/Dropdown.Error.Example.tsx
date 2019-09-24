import * as React from 'react';
import { Dropdown, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { useToggle } from '@uifabric/react-hooks';

const stackTokens: IStackTokens = { childrenGap: 30 };
const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 }, root: { height: 100 } };
const options: IDropdownOption[] = [
  { key: 'A', text: 'Option a' },
  { key: 'B', text: 'Option b' },
  { key: 'C', text: 'Option c' },
  { key: 'D', text: 'Option d' },
  { key: 'E', text: 'Option e' }
];

export const DropdownErrorExample: React.FunctionComponent = () => {
  // Don't show the error message by default because it's annoying to screen reader users.
  const [showError, toggleShowError] = useToggle(false);

  return (
    <Stack horizontal tokens={stackTokens} verticalAlign="start">
      <Toggle label="Show error message" onText="Yes" offText="No" checked={showError} onChange={toggleShowError} />
      <Dropdown
        placeholder="Select an option"
        label="Dropdown with error message"
        options={options}
        errorMessage={showError ? 'This dropdown has an error' : undefined}
        styles={dropdownStyles}
      />
    </Stack>
  );
};
