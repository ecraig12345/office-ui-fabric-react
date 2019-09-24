import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto'
  }
};
const groups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: 'http://example.com',
        links: [
          { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
          { name: 'MSN', url: 'http://msn.com', disabled: true, key: 'key2', target: '_blank' }
        ],
        isExpanded: true
      },
      { name: 'Documents', isExpanded: true, url: 'http://example.com', key: 'key3', target: '_blank' },
      { name: 'Pages', url: 'http://msn.com', key: 'key4', target: '_blank' },
      { name: 'Notebook', disabled: true, url: 'http://msn.com', key: 'key5', target: '_blank' },
      { name: 'Communication and Media', url: 'http://msn.com', key: 'key6', target: '_blank' },
      { name: 'News', icon: 'News', url: 'http://cnn.com', key: 'key7', target: '_blank' }
    ]
  }
];

export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      expandButtonAriaLabel="Expand or collapse"
      selectedAriaLabel="Selected"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={groups}
    />
  );
};

function _onLinkClick(ev: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}
