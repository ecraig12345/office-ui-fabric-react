import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { PeoplePickerPageProps as ExternalProps } from 'office-ui-fabric-react/lib/components/pickers/PeoplePicker/PeoplePicker.doc';
import { oufrRepoUrl } from '../../../utilities/index';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PeoplePickerPage/docs/PeoplePickerRelated.md') as string;

export const PeoplePickerPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    componentUrl: oufrRepoUrl + '/src/components/pickers/PeoplePicker',
    related
  }
};
