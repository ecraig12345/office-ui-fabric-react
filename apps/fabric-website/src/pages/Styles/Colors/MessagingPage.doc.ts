import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Messaging';
const componentUrl = websiteRepoUrl + '/src/pages/Styles/Colors';

export const ColorsMessagingPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    componentUrl
  }
};
