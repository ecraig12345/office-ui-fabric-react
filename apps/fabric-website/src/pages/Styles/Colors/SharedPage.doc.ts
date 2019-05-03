import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Shared';
const componentUrl = websiteRepoUrl + '/src/pages/Styles/Colors';

export const ColorsSharedPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    componentUrl
  }
};
