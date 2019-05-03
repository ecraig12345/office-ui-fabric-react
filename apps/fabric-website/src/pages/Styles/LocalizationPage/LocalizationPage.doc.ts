import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Localization';
const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/LocalizationPage/docs/LocalizationRelated.md') as string;
const componentUrl = websiteRepoUrl + '/src/pages/Styles/LocalizationPage';

export const LocalizationPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    related,
    componentUrl
  }
};
