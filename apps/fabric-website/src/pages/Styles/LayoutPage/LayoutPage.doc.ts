import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Layout';
const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/LayoutPage/docs/LayoutRelated.md') as string;
const componentUrl = websiteRepoUrl + '/src/pages/Styles/LayoutPage';

export const LayoutPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    related,
    componentUrl
  }
};
