import * as React from 'react';
import { DefaultButton, List } from 'office-ui-fabric-react';
import { createListItems } from 'office-ui-fabric-react/lib/utilities/exampleData';
import { useConst } from '@uifabric/react-hooks';

export const UseConstInitializerExample: React.FunctionComponent = () => {
  // Create list items with randomized data (only do this once)
  const items = useConst(() => createListItems(10));

  const renderCountRef = React.useRef(0);
  renderCountRef.current++;

  // Hack to force re-rendering. Not recommended for general use.
  const [, forceUpdate] = React.useState<any>();
  const onClick = React.useCallback(() => forceUpdate(undefined), []);

  return (
    <div>
      <h4>List of randomized items (render count: {renderCountRef.current})</h4>
      <DefaultButton text="Force update" onClick={onClick} />
      <List items={items} />
    </div>
  );
};
