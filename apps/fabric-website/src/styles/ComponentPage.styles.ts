import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IComponentPageStyleProps, IComponentPageStyles } from '@uifabric/example-app-base';
import { fullWidth, fullHeight, contentPadding } from './mixins';

export const getStyles: IStyleFunction<IComponentPageStyleProps, Partial<IComponentPageStyles>> = props => {
  const sectionStyle = contentPadding('50px', '50px');
  const nonOverviewSectionStyle = { ...sectionStyle, marginTop: 0 };
  return {
    root: [
      {
        paddingBottom: 100
      },
      fullWidth(),
      fullHeight()
    ],
    overviewSection: sectionStyle,
    bestPracticesSection: nonOverviewSectionStyle,
    variantsSection: nonOverviewSectionStyle,
    implementationSection: nonOverviewSectionStyle,
    implementationExamplesSection: nonOverviewSectionStyle
  };
};
