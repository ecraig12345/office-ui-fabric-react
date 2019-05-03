import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { TeachingBubblePageProps as ExternalProps } from 'office-ui-fabric-react/lib/components/TeachingBubble/TeachingBubble.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/TeachingBubblePage/docs/TeachingBubbleRelated.md') as string;

export const TeachingBubblePageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related
  }
};
