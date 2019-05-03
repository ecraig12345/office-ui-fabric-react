import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Neutrals';
const componentUrl = websiteRepoUrl + '/src/pages/Styles/Colors';

export const ColorsNeutralsPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    componentUrl
  }
};
