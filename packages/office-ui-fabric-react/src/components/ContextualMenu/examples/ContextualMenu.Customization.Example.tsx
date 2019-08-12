import * as React from 'react';
import { DirectionalHint, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { css } from 'office-ui-fabric-react/lib/Utilities';

const classNames = mergeStyleSets({
  menu: {
    textAlign: 'center',
    maxWidth: 180,
    selectors: {
      '.ms-ContextualMenu-item': { height: 'auto' }
    }
  },
  charmItem: {
    display: 'inline-block',
    width: 40,
    height: 40,
    lineHeight: 40, // px
    textAlign: 'center',
    verticalAlign: 'middle',
    marginBottom: 8,
    cursor: 'pointer',
    selectors: {
      ':hover': {
        backgroundColor: '#eaeaea'
      }
    }
  },
  categoriesList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  categorySwatch: {
    width: 24,
    height: 24,
    verticalAlign: 'top'
  }
});

export const ContextualMenuCustomizationExample: React.FunctionComponent = () => {
  return (
    <DefaultButton
      text="Click for ContextualMenu"
      menuProps={{
        shouldFocusOnMount: true,
        directionalHint: DirectionalHint.bottomLeftEdge,
        className: classNames.menu,
        items: [
          {
            key: 'newItem',
            text: 'New'
          },
          {
            key: 'upload',
            text: 'Upload'
          },
          {
            key: 'divider_1',
            itemType: ContextualMenuItemType.Divider
          },
          {
            key: 'charm',
            text: 'Charm',
            className: 'Charm-List',
            subMenuProps: {
              focusZoneProps: {
                direction: FocusZoneDirection.bidirectional,
                // Only set this to true if you have submenu items with data-no-horizontal-wrap set
                // (as this example does), because it makes focus handling more expensive
                checkForNoWrap: true
              },
              items: [
                {
                  key: 'bulb',
                  text: 'Lightbulb',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'run',
                  text: 'Running',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'plane',
                  text: 'Airplane',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'page',
                  text: 'Page',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'cake',
                  text: 'Cake',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'soccer',
                  text: 'Soccer',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'home',
                  text: 'Home',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'emoji',
                  text: 'Emoji2',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'work',
                  text: 'Work',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'coffee',
                  text: 'Coffee',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'people',
                  text: 'People',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'stopwatch',
                  text: 'Stopwatch',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'music',
                  text: 'MusicInCollectionFill',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'lock',
                  text: 'Lock',
                  onRender: _renderCharmMenuItem,
                  className: classNames.charmItem
                },
                {
                  key: 'item3',
                  text: 'Item 3',
                  'data-no-horizontal-wrap': true
                },
                {
                  key: 'item4',
                  text: 'Item 4',
                  'data-no-horizontal-wrap': true
                }
              ]
            }
          },
          {
            key: 'categories',
            text: 'Categorize',
            subMenuProps: {
              items: [
                {
                  key: 'categories',
                  text: 'categories',
                  categoryList: [
                    {
                      name: 'Personal',
                      color: 'yellow'
                    },
                    {
                      name: 'Work',
                      color: 'green'
                    },
                    {
                      name: 'Birthday',
                      color: 'blue'
                    },
                    {
                      name: 'Spam',
                      color: 'grey'
                    },
                    {
                      name: 'Urgent',
                      color: 'red'
                    },
                    {
                      name: 'Hobbies',
                      color: 'black'
                    }
                  ],
                  onRender: _renderCategoriesList
                },
                {
                  key: 'divider_1',
                  itemType: ContextualMenuItemType.Divider
                },
                {
                  key: 'clear',
                  text: 'Clear categories'
                },
                {
                  key: 'manage',
                  text: 'Manage categories'
                }
              ]
            }
          }
        ]
      }}
    />
  );
};

function _renderCharmMenuItem(item: any, dismissMenu: () => void): JSX.Element {
  return (
    <IconButton
      {...item}
      iconProps={{ iconName: item.text }}
      className="ms-ContextualMenu-link"
      data-is-focusable={true}
      onClick={dismissMenu}
      data-no-vertical-wrap={true}
    />
  );
}

function _renderCategoriesList(item: any): JSX.Element {
  return (
    <ul className={classNames.categoriesList}>
      <li className="ms-ContextualMenu-item">
        {item.categoryList.map((category: any) => (
          <DefaultButton key={category.name} className="ms-ContextualMenu-link" styles={{ root: { maxWidth: '50%' } }} role="menuitem">
            <div>
              <span className={css('ms-ContextualMenu-icon', classNames.categorySwatch)} style={{ backgroundColor: category.color }} />
              <span className="ms-ContextualMenu-itemText">{category.name}</span>
            </div>
          </DefaultButton>
        ))}
      </li>
    </ul>
  );
}
