import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Fabric Icons';
const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/FabricIconsPage/docs/FabricIconsRelated.md') as string;
const componentUrl = websiteRepoUrl + '/src/pages/Styles/FabricIconsPage';

export const FabricIconsPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/FabricIconsPage/docs/web/FabricIconsOverview.md') as string,
    related,
    componentUrl
  }
};
