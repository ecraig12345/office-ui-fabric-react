import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Personas & Groups';
const fileNamePrefix = 'Personas';
const componentUrl = websiteRepoUrl + '/src/pages/Styles/Colors';

export const ColorsPersonasPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    componentUrl,
    fileNamePrefix
  }
};
