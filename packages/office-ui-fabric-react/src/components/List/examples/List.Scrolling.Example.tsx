import * as React from 'react';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { List, ScrollToMode } from 'office-ui-fabric-react/lib/List';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { mergeStyleSets, getTheme } from 'office-ui-fabric-react/lib/Styling';

export type IExampleItem = { name: string };

export interface IListScrollingExampleProps {
  items: IExampleItem[];
}

export interface IListScrollingExampleState {
  selectedIndex: number;
  scrollToMode: ScrollToMode;
}

const evenItemHeight = 25;
const oddItemHeight = 50;
const numberOfItemsOnPage = 10;

const theme = getTheme();
const classNames = mergeStyleSets({
  container: {
    marginTop: 20,
    overflow: 'auto',
    maxHeight: 500
  },
  itemContent: [
    theme.fonts.medium,
    {
      position: 'relative',
      display: 'block',
      boxSizing: 'border-box',
      borderLeft: '3px solid ' + theme.palette.themePrimary,
      paddingLeft: 27 // Reduce padding to allow room for border
    }
  ],
  itemContentEven: {
    height: evenItemHeight,
    lineHeight: evenItemHeight
  },
  itemContentOdd: {
    height: oddItemHeight,
    lineHeight: oddItemHeight,
    background: theme.palette.neutralLighter
  }
});

export class ListScrollingExample extends React.Component<IListScrollingExampleProps, IListScrollingExampleState> {
  private _list: List<IExampleItem>;

  constructor(props: IListScrollingExampleProps) {
    super(props);

    this.state = {
      selectedIndex: 0,
      scrollToMode: ScrollToMode.auto
    };
  }

  public render() {
    const { items } = this.props;

    return (
      <div>
        <Stack horizontal verticalAlign="center" wrap tokens={{ childrenGap: 40 }}>
          <div>
            <Label>Scroll number of items:</Label>
            <FocusZone direction={FocusZoneDirection.horizontal}>
              {['-10', '-1', '+1', '+10'].map(amount => (
                <DefaultButton
                  key={amount}
                  styles={{ root: { width: 60, minWidth: 60 } }}
                  onClick={this._scrollRelative(Number(amount))}
                  text={amount}
                  ariaLabel={`Scroll ${amount} items`}
                />
              ))}
            </FocusZone>
          </div>

          <Dropdown
            label="Scroll-to mode:"
            ariaLabel="Scroll-to mode"
            defaultSelectedKey="auto"
            options={[
              { key: 'auto', text: 'Auto' },
              { key: 'top', text: 'Top' },
              { key: 'bottom', text: 'Bottom' },
              { key: 'center', text: 'Center' }
            ]}
            onChange={this._onDropdownChange}
          />
          <div>
            <Label>Scroll to item index:</Label>
            <TextField value={String(this.state.selectedIndex)} onChange={this._onChangeText} />
          </div>
        </Stack>

        <div className={classNames.container} data-is-scrollable={true}>
          <List ref={this._resolveList} items={items} getPageHeight={this._getPageHeight} onRenderCell={this._onRenderCell} />
        </div>
      </div>
    );
  }

  private _getPageHeight(idx: number): number {
    let h = 0;
    for (let i = idx; i < idx + numberOfItemsOnPage; ++i) {
      const isEvenRow = i % 2 === 0;

      h += isEvenRow ? evenItemHeight : oddItemHeight;
    }
    return h;
  }

  private _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, value: string): void => {
    this._scroll(parseInt(value, 10) || 0, this.state.scrollToMode);
  };

  private _onDropdownChange = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption) => {
    this._scroll(this.state.selectedIndex, ScrollToMode[option.key as keyof typeof ScrollToMode]);
  };

  private _onRenderCell = (item: IExampleItem, index: number): JSX.Element => {
    return (
      <div data-is-focusable={true}>
        <div className={css(classNames.itemContent, index % 2 === 0 ? classNames.itemContentEven : classNames.itemContentOdd)}>
          {index} &nbsp; {item.name}
        </div>
      </div>
    );
  };

  private _scrollRelative = (delta: number): (() => void) => {
    return (): void => {
      this._scroll(this.state.selectedIndex + delta, this.state.scrollToMode);
    };
  };

  private _scroll = (index: number, scrollToMode: ScrollToMode): void => {
    const updatedSelectedIndex = Math.min(Math.max(index, 0), this.props.items.length - 1);

    this.setState(
      {
        selectedIndex: updatedSelectedIndex,
        scrollToMode: scrollToMode
      },
      () => {
        this._list.scrollToIndex(updatedSelectedIndex, idx => (idx % 2 === 0 ? evenItemHeight : oddItemHeight), scrollToMode);
      }
    );
  };

  private _resolveList = (list: List<IExampleItem>): void => {
    this._list = list;
  };
}
