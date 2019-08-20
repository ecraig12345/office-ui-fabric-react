import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';
import { useConst } from '@uifabric/react-hooks';

interface IMemoListProps {
  title: string;
  items: { text: string; key: string }[];
}
const MemoList: React.FunctionComponent<IMemoListProps> = React.memo(props => {
  const { title, items } = props;
  const renderCountRef = React.useRef(0);
  renderCountRef.current++;

  return (
    <div>
      <h4>
        {title} (render count: {renderCountRef.current})
      </h4>
      <ul>
        {items.map(item => (
          <li key={item.key}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
});

export const UseConstValueExample: React.FunctionComponent = () => {
  const constItems = useConst([{ key: '1', text: 'Item 1' }, { key: '2', text: 'Item 2' }]);
  const recreatedItems = [{ key: '1', text: 'Item 1' }, { key: '2', text: 'Item 2' }];
  // Hack to force re-rendering. Not recommended for general use.
  const [, forceUpdate] = React.useState<any>();
  const onClick = React.useCallback(() => forceUpdate(undefined), []);

  return (
    <div>
      <MemoList title="List with constant items" items={constItems} />
      <MemoList title="List with re-created items" items={recreatedItems} />
      <DefaultButton text="Force update" onClick={onClick} />
    </div>
  );
};
