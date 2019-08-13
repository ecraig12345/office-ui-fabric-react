import * as React from 'react';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { ResizeGroup } from 'office-ui-fabric-react/lib/ResizeGroup';
import { OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export interface IOverflowData {
  primary: IContextualMenuItem[];
  overflow: IContextualMenuItem[];
  cacheKey?: string;
}

export interface IResizeGroupOverflowSetExampleState {
  numberOfItems: number;
  buttonsChecked: boolean;
  cachingEnabled: boolean;
  onGrowDataEnabled: boolean;
}

export class ResizeGroupOverflowSetExample extends BaseComponent<{}, IResizeGroupOverflowSetExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      buttonsChecked: false,
      cachingEnabled: false,
      onGrowDataEnabled: false,
      numberOfItems: 20
    };
  }

  public render(): JSX.Element {
    const { numberOfItems, cachingEnabled, buttonsChecked, onGrowDataEnabled } = this.state;
    const dataToRender = generateData(numberOfItems, cachingEnabled, buttonsChecked);
    return (
      <div>
        <ResizeGroup
          role="tabpanel"
          aria-label="Resize Group with an Overflow Set"
          data={dataToRender}
          onReduceData={this._onReduceData}
          onGrowData={onGrowDataEnabled ? this._onGrowData : undefined}
          // tslint:disable-next-line:jsx-no-lambda
          onRenderData={data => {
            return (
              <OverflowSet
                items={data.primary}
                overflowItems={data.overflow.length ? data.overflow : null}
                onRenderItem={item => {
                  return (
                    <CommandBarButton text={item.name} iconProps={{ iconName: item.icon }} onClick={item.onClick} checked={item.checked} />
                  );
                }}
                onRenderOverflowButton={overflowItems => {
                  return <CommandBarButton menuProps={{ items: overflowItems! }} />;
                }}
                styles={{ root: { height: 40 } }}
              />
            );
          }}
        />
        <Stack horizontal wrap tokens={{ childrenGap: 40 }} styles={{ root: { marginTop: 20 } }}>
          <Toggle label="Enable caching" onChange={this._onCachingEnabledChanged} checked={cachingEnabled} />
          <Toggle label="Set onGrowData" onChange={this._onGrowDataEnabledChanged} checked={onGrowDataEnabled} />
          <Toggle label="Buttons checked" onChange={this._onButtonsCheckedChanged} checked={buttonsChecked} />
          <Dropdown
            label="Number of items to render"
            selectedKey={numberOfItems.toString()}
            onChange={this._onNumberOfItemsChanged}
            options={[
              { key: '20', text: '20' },
              { key: '30', text: '30' },
              { key: '40', text: '40' },
              { key: '50', text: '50' },
              { key: '75', text: '75' },
              { key: '100', text: '100' },
              { key: '200', text: '200' }
            ]}
            styles={{ root: { width: 180 } }}
          />
        </Stack>
      </div>
    );
  }

  private _onReduceData = (currentData: any): any => {
    if (currentData.primary.length === 0) {
      return undefined;
    }

    const overflow = [...currentData.primary.slice(-1), ...currentData.overflow];
    const primary = currentData.primary.slice(0, -1);

    let cacheKey = undefined;
    if (this.state.cachingEnabled) {
      cacheKey = computeCacheKey(primary);
    }
    return { primary, overflow, cacheKey };
  };

  private _onGrowData = (currentData: any): any => {
    if (currentData.overflow.length === 0) {
      return undefined;
    }

    const overflow = currentData.overflow.slice(1);
    const primary = [...currentData.primary, ...currentData.overflow.slice(0, 1)];

    let cacheKey = undefined;
    if (this.state.cachingEnabled) {
      cacheKey = computeCacheKey(primary);
    }
    return { primary, overflow, cacheKey };
  };

  private _onCachingEnabledChanged = (_: React.FormEvent<HTMLElement | HTMLInputElement>, checked: boolean): void => {
    this.setState({ cachingEnabled: checked });
  };

  private _onGrowDataEnabledChanged = (_: React.FormEvent<HTMLElement | HTMLInputElement>, checked: boolean): void => {
    this.setState({ onGrowDataEnabled: checked });
  };

  private _onButtonsCheckedChanged = (_: React.FormEvent<HTMLElement | HTMLInputElement>, checked: boolean): void => {
    this.setState({ buttonsChecked: checked });
  };

  private _onNumberOfItemsChanged = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption): void => {
    this.setState({ numberOfItems: parseInt(option.text, 10) });
  };
}

function generateData(count: number, cachingEnabled: boolean, checked: boolean): IOverflowData {
  const icons = ['Add', 'Share', 'Upload'];
  const dataItems = [];
  let cacheKey = '';
  for (let index = 0; index < count; index++) {
    const item = {
      key: `item${index}`,
      name: `Item ${index}`,
      icon: icons[index % icons.length],
      checked: checked
    };

    cacheKey = cacheKey + item.key;
    dataItems.push(item);
  }

  let result: IOverflowData = {
    primary: dataItems,
    overflow: [] as any[]
  };

  if (cachingEnabled) {
    result = { ...result, cacheKey };
  }

  return result;
}

function computeCacheKey(primaryControls: IContextualMenuItem[]): string {
  return primaryControls.reduce((acc, current) => acc + current.key, '');
}
