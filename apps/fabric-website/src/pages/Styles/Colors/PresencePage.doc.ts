import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Presence';
const componentUrl = websiteRepoUrl + '/src/pages/Styles/Colors';

export const ColorsPresencePageProps: TFabricPlatformPageProps = {
  web: {
    title,
    componentUrl
  }
};
