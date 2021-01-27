import { INavPage } from '@fluentui/react-docsite-components';

export const ResourcesPages: INavPage = {
  title: 'Resources',
  url: '#/resources',
  isUhfLink: true,
  component: require<any>('../../../pages/Overviews/ResourcesPage/ResourcesPage').ResourcesPage,
};
