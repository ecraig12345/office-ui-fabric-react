import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const componentUrl = websiteRepoUrl + '/src/pages/Overviews/ControlsPage';

export const ControlsPageProps: TFabricPlatformPageProps = {
  web: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Overviews/ControlsPage/docs/web/ControlsOverview.md') as string,
    componentUrl
  },
  ios: {
    componentUrl
  }
};
