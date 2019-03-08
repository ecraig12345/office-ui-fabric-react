import * as React from 'react';
import { BaseComponent, KeyCodes, getId, getNativeProps, divProperties, classNamesFunction, warn } from '../../Utilities';
import { CommandButton } from '../../Button';
import { IPivotProps, IPivotStyleProps, IPivotStyles } from './Pivot.types';
import { IPivotItemProps } from './PivotItem.types';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { PivotItem } from './PivotItem';
import { PivotLinkFormat } from './Pivot.types';
import { PivotLinkSize } from './Pivot.types';
import { Icon } from '../../Icon';

const getClassNames = classNamesFunction<IPivotStyleProps, IPivotStyles>();

export interface IPivotState {
  selectedKey: string | undefined;
}

const PivotItemType = (<PivotItem /> as React.ReactElement<IPivotItemProps>).type;

type PivotClassNames = { [key in keyof IPivotStyles]: string };

/**
 *  Usage:
 *
 *     <Pivot>
 *       <PivotItem headerText="Foo">
 *         <Label>Pivot #1</Label>
 *       </PivotItem>
 *       <PivotItem headerText="Bar">
 *         <Label>Pivot #2</Label>
 *       </PivotItem>
 *       <PivotItem headerText="Bas">
 *         <Label>Pivot #3</Label>
 *       </PivotItem>
 *     </Pivot>
 */
export class PivotBase extends BaseComponent<IPivotProps, IPivotState> {
  private _pivotId: string;
  private _focusZone = React.createRef<FocusZone>();

  constructor(props: IPivotProps) {
    super(props);

    this._warnDeprecations({
      initialSelectedKey: 'defaultSelectedKey',
      initialSelectedIndex: 'defaultSelectedIndex'
    });

    this._pivotId = getId('Pivot');
    const links: IPivotItemProps[] = this._getPivotItems();

    const { defaultSelectedKey = props.initialSelectedKey, defaultSelectedIndex = props.initialSelectedIndex } = props;

    let selectedKey: string | undefined;

    if (defaultSelectedKey) {
      selectedKey = defaultSelectedKey;
    } else if (typeof defaultSelectedIndex === 'number') {
      selectedKey = links[defaultSelectedIndex].itemKey!;
    } else if (links.length) {
      selectedKey = links[0].itemKey!;
    }

    this.state = {
      selectedKey
    };
  }

  /**
   * Sets focus to the first pivot tab.
   */
  public focus(): void {
    if (this._focusZone.current) {
      this._focusZone.current.focus();
    }
  }

  public render(): JSX.Element {
    const props = this.props;

    const divProps = getNativeProps(props, divProperties);

    const classNames = getClassNames(props.styles!, {
      theme: props.theme!,
      rootIsLarge: props.linkSize === PivotLinkSize.large,
      rootIsTabs: props.linkFormat === PivotLinkFormat.tabs
    });

    const items = this._getPivotItems();
    const selectedItem = this._getSelectedItem(items);

    return (
      <div {...divProps}>
        {this._renderPivotItems(items, selectedItem, classNames)}
        {this._renderPivotItem(items, selectedItem)}
      </div>
    );
  }

  private _getSelectedItem(items: IPivotItemProps[]): IPivotItemProps | undefined {
    return _getItemForKey(items, this.props.selectedKey) || _getItemForKey(items, this.state.selectedKey) || items[0];
  }

  /**
   * Renders the set of links to route between pivots
   */
  private _renderPivotItems(items: IPivotItemProps[], selectedItem: IPivotItemProps | undefined, classNames: PivotClassNames): JSX.Element {
    return (
      <FocusZone componentRef={this._focusZone} direction={FocusZoneDirection.horizontal}>
        <div className={classNames.root} role="tablist">
          {items.map((l: IPivotItemProps, i: number) => this._renderPivotLink(l, i, selectedItem, classNames))}
        </div>
      </FocusZone>
    );
  }

  /**
   * Renders a pivot link button.
   */
  private _renderPivotLink = (
    item: IPivotItemProps,
    itemIndex: number,
    selectedItem: IPivotItemProps | undefined,
    classNames: PivotClassNames
  ): JSX.Element => {
    const { itemKey, headerButtonProps, onRenderItemLink } = item;
    const tabId = this._getTabId(itemKey!, itemIndex);
    let linkContent: JSX.Element | null;
    const isSelected = selectedItem === item;

    const defaultOnRender = this._renderLinkContent.bind(this, classNames);
    if (onRenderItemLink) {
      linkContent = onRenderItemLink(item, defaultOnRender);
    } else {
      linkContent = defaultOnRender(item);
    }

    return (
      <CommandButton
        {...headerButtonProps}
        id={tabId}
        key={itemKey}
        className={isSelected ? classNames.linkIsSelected : classNames.link}
        onClick={this._onLinkClick.bind(this, itemKey)}
        onKeyPress={this._onKeyPress.bind(this, itemKey)}
        ariaLabel={item.ariaLabel}
        role="tab"
        aria-selected={isSelected}
        name={item.headerText}
        keytipProps={item.keytipProps}
      >
        {linkContent}
      </CommandButton>
    );
  };

  /**
   * Renders the content of a pivot link button.
   */
  private _renderLinkContent = (classNames: PivotClassNames, item: IPivotItemProps): JSX.Element => {
    const { itemCount, itemIcon, headerText } = item;

    return (
      <span className={classNames.linkContent}>
        {itemIcon !== undefined && (
          <span className={classNames.icon}>
            <Icon iconName={itemIcon} />
          </span>
        )}
        {headerText !== undefined && <span className={classNames.text}> {headerText}</span>}
        {itemCount !== undefined && <span className={classNames.count}> ({itemCount})</span>}
      </span>
    );
  };

  /**
   * Renders the current Pivot Item
   */
  private _renderPivotItem(items: IPivotItemProps[], selectedItem: IPivotItemProps | undefined): JSX.Element | null {
    if (this.props.headersOnly || !selectedItem) {
      return null;
    }

    const index = items.indexOf(selectedItem);
    const selectedTabId = this._getTabId(selectedItem.itemKey!, index);

    return (
      <div role="tabpanel" aria-labelledby={selectedTabId}>
        {React.Children.toArray(this.props.children)[index]}
      </div>
    );
  }

  /**
   * Gets the set of PivotLinks as arrary of IPivotItemProps
   * The set of Links is determined by child components of type PivotItem
   */
  private _getPivotItems(): IPivotItemProps[] {
    const pivotItems = _getPivotItems(this.props.children, true /*shouldWarn*/);
    return pivotItems.map((pivotItem: PivotItem, index: number) => {
      const { linkText, ...pivotItemProps } = pivotItem.props;
      const itemKey = pivotItem.props.itemKey || index.toString();

      return {
        // Use linkText (deprecated) if headerText is not provided
        headerText: linkText,
        ...pivotItemProps,
        itemKey: itemKey
      };
    });
  }

  /**
   * Generates the Id for the tab button.
   */
  private _getTabId(itemKey: string, index: number): string {
    if (this.props.getTabId) {
      return this.props.getTabId(itemKey, index);
    }

    return this._pivotId + `-Tab${index}`;
  }

  /**
   * Handles the onClick event on PivotLinks
   */
  private _onLinkClick(itemKey: string, ev: React.MouseEvent<HTMLElement>): void {
    ev.preventDefault();
    this._updateSelectedItem(itemKey, ev);
  }

  /**
   * Handle the onKeyPress eventon the PivotLinks
   */
  private _onKeyPress(itemKey: string, ev: React.KeyboardEvent<HTMLElement>): void {
    if (ev.which === KeyCodes.enter) {
      ev.preventDefault();
      this._updateSelectedItem(itemKey);
    }
  }

  /**
   * Updates the state with the new selected index
   */
  private _updateSelectedItem(itemKey: string, ev?: React.MouseEvent<HTMLElement>): void {
    const props = this.props;

    this.setState({
      selectedKey: itemKey
    });

    if (!props.onLinkClick) {
      return;
    }

    const pivotItems = _getPivotItems(props.children);
    for (const item of pivotItems) {
      if (item.props.itemKey === itemKey) {
        props.onLinkClick(item, ev);
        break;
      }
    }
  }
}

function _getPivotItems(children: React.ReactNode, shouldWarn?: boolean): PivotItem[] {
  const result: PivotItem[] = [];
  React.Children.forEach(children, (item: React.ReactChild, i: number) => {
    if (typeof item === 'object' && item.type === PivotItemType) {
      result.push((item as any) as PivotItem);
    } else if (shouldWarn) {
      warn('The children of a Pivot component must be of type PivotItem to be rendered.');
    }
  });
  return result;
}

function _getItemForKey(links: IPivotItemProps[], itemKey: string | undefined): IPivotItemProps | undefined {
  if (itemKey !== undefined) {
    for (const link of links) {
      if (link.itemKey === itemKey) {
        return link;
      }
    }
  }
}
