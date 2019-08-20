import * as React from 'react';
import { useId } from '@uifabric/react-hooks';

const ComponentWithId: React.FunctionComponent<{ text: string }> = props => {
  const id = useId('test');
  return (
    <div id={id}>
      {props.text} (id: {id})
    </div>
  );
};

export const UseIdExample: React.FunctionComponent = () => {
  return (
    <div>
      <ComponentWithId text="Component 1" />
      <ComponentWithId text="Component 2" />
      <ComponentWithId text="Component 3" />
      <ComponentWithId text="Component 4" />
    </div>
  );
};
