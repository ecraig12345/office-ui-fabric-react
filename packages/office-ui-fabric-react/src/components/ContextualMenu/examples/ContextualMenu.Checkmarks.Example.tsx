import * as React from 'react';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const keys: string[] = ['tea', 'coffee', 'hotChocolate', 'sodas', 'cola', 'rootBeer', 'lemonLime'];

export const ContextualMenuCheckmarksExample: React.FunctionComponent = () => {
  const [selection, setSelection] = React.useState<{ [key: string]: boolean }>({});

  const onToggleSelect = (ev?: React.MouseEvent<HTMLButtonElement>, item?: IContextualMenuItem): void => {
    ev!.preventDefault();

    setSelection({
      ...selection,
      [item!.key]: !selection[item!.key]
    });
  };

  return (
    <DefaultButton
      text="Click for ContextualMenu"
      menuProps={{
        shouldFocusOnMount: true,
        items: [
          {
            key: keys[0],
            text: 'Tea',
            canCheck: true,
            isChecked: selection[keys[0]],
            onClick: onToggleSelect
          },
          {
            key: keys[1],
            text: 'Coffee',
            canCheck: true,
            isChecked: selection[keys[1]],
            iconProps: {
              iconName: 'Coffee'
            },
            onClick: onToggleSelect
          },
          {
            key: keys[2],
            text: 'Hot chocolate',
            canCheck: true,
            isChecked: selection[keys[2]],
            onClick: onToggleSelect
          },
          {
            text: 'Sodas',
            // Having a checkable submenu or split button typically wouldn't make sense
            canCheck: false,
            key: keys[3],
            subMenuProps: {
              items: [
                {
                  key: keys[4],
                  text: 'Cola',
                  canCheck: true,
                  isChecked: selection[keys[4]],
                  onClick: onToggleSelect
                },
                {
                  key: keys[5],
                  text: 'Root beer',
                  canCheck: true,
                  isChecked: selection[keys[5]],
                  onClick: onToggleSelect
                },
                {
                  key: keys[6],
                  text: 'Lemon lime',
                  canCheck: true,
                  isChecked: selection[keys[6]],
                  onClick: onToggleSelect
                }
              ]
            }
          }
        ]
      }}
    />
  );
};
