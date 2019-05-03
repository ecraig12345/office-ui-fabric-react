import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Office Brand Icons';
const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/OfficeBrandIconsPage/docs/OfficeBrandIconsRelated.md') as string;
const componentUrl = websiteRepoUrl + '/src/pages/Styles/OfficeBrandIconsPage';

export const OfficeBrandIconsPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    related,
    componentUrl
  }
};
