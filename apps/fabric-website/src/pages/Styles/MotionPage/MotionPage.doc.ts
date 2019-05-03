import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Motion';
const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/MotionPage/docs/MotionRelated.md') as string;
const componentUrl = websiteRepoUrl + '/src/pages/Styles/MotionPage';

export const MotionPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/MotionPage/docs/web/MotionOverview.md') as string,
    related,
    componentUrl
  }
};
