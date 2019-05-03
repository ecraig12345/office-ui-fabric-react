import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Products';
const componentUrl = websiteRepoUrl + '/src/pages/Styles/Colors';

export const ColorsProductsPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    componentUrl
  }
};
