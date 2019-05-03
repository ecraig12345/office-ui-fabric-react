import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Styles';
const componentUrl = websiteRepoUrl + '/src/pages/Overviews/StylesPage';

export const StylesPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Overviews/StylesPage/docs/web/StylesOverview.md') as string,
    componentUrl
  }
};
