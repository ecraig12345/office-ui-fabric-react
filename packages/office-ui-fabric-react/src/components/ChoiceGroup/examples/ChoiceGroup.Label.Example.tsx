import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { useId } from 'office-ui-fabric-react/lib/Utilities';

export const ChoiceGroupLabelExample: React.FunctionComponent = () => {
  // Use useId() to ensure that the label ID is unique on the page. It's also okay to use a plain
  // string and manually ensure its uniqueness.
  const labelId = useId('labelElement');

  return (
    <div>
      <Label id={labelId} required={true}>
        Custom label
      </Label>
      <ChoiceGroup
        defaultSelectedKey="B"
        options={[
          {
            key: 'A',
            text: 'Option A'
          },
          {
            key: 'B',
            text: 'Option B'
          },
          {
            key: 'C',
            text: 'Option C',
            disabled: true
          },
          {
            key: 'D',
            text: 'Option D'
          }
        ]}
        onChange={_onChange}
        ariaLabelledBy={labelId}
      />
    </div>
  );
};

function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
  console.dir(option);
}
