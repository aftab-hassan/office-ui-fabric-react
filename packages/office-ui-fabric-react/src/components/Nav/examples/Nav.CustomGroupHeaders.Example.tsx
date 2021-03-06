import * as React from 'react';
import { Nav, INavLinkGroup } from '../index';

export const NavCustomGroupHeadersExample: React.StatelessComponent = () => {
  return (
    <Nav
      onRenderGroupHeader={_onRenderGroupHeader}
      groups={[
        {
          name: 'Pages',
          links: [
            // prettier-ignore
            { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
            { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' }
          ]
        },
        {
          name: 'More pages',
          links: [
            // prettier-ignore
            { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
            { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' }
          ]
        }
      ]}
    />
  );
};

function _onRenderGroupHeader(group: INavLinkGroup): JSX.Element {
  return <h3>{group.name}</h3>;
}
