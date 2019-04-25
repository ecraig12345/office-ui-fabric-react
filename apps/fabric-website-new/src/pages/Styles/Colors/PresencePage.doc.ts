import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const title = 'Presence';
const componentUrl = 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/apps/fabric-website-new/src/pages/Styles/Colors';

export const ColorsPresencePageProps: TFabricPlatformPageProps = {
  web: {
    title,
    contact: require('!raw-loader!@uifabric/fabric-website-new/src/pages/Styles/Colors/docs/web/ColorsPresenceContact.md') as string,
    componentUrl
  }
};
