import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { PickersPageProps as ExternalProps } from 'office-ui-fabric-react/lib/components/pickers/Pickers.doc';
import { oufrRepoUrl } from '../../../utilities/index';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PickersPage/docs/PickersRelated.md') as string;

export const PickersPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    componentUrl: oufrRepoUrl + '/src/components/pickers',
    related
  }
};
