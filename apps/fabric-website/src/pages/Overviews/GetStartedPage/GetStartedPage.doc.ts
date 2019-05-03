import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

export const GetStartedPageProps: TFabricPlatformPageProps = {
  web: {
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Overviews/GetStartedPage/docs/web/GetStartedOverview.md') as string,
    componentUrl: websiteRepoUrl + '/src/pages/Overviews/GetStartedPage'
  }
};
