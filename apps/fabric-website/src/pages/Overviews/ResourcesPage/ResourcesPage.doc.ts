import { IPageProps } from '@uifabric/example-app-base/lib/index2';
import { websiteRepoUrl } from '../../../utilities/index';

export const ResourcesPageProps: IPageProps = {
  title: 'Resources',
  overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Overviews/ResourcesPage/docs/default/ResourcesOverview.md') as string,
  componentUrl: websiteRepoUrl + '/src/pages/Overviews/ResourcesPage'
};
