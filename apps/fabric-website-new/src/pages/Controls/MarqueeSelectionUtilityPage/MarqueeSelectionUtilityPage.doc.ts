import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { MarqueeSelectionPageProps as ExternalProps } from 'office-ui-fabric-react/lib/components/MarqueeSelection/MarqueeSelection.doc';

const related = require('!raw-loader!@uifabric/fabric-website-new/src/pages/Controls/MarqueeSelectionUtilityPage/docs/MarqueeSelectionUtilityRelated.md') as string;

export const MarqueeSelectionUtilityPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related
  }
};
