import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const title = 'Personas & Groups';
const fileNamePrefix = 'Personas';
const componentUrl = 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/apps/fabric-website-new/src/pages/Styles/Colors';

export const ColorsPersonasPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    contact: require('!raw-loader!@uifabric/fabric-website-new/src/pages/Styles/Colors/docs/web/ColorsPersonasContact.md') as string,
    componentUrl,
    fileNamePrefix
  }
};
