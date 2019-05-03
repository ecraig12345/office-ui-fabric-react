import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const title = 'Fluent Theme';
const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/FluentThemePage/docs/FluentThemeRelated.md') as string;
const componentUrl = websiteRepoUrl + '/src/pages/Controls/FluentThemePage';

export const FluentThemePageProps: TFabricPlatformPageProps = {
  web: {
    title,
    componentUrl,
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/FluentThemePage/docs/web/FluentThemeOverview.md') as string,
    related
  }
};
