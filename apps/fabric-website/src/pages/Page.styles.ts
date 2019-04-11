import { mergeStyles, mergeStyleSets, IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { IDemoPageStyles } from '@uifabric/fabric-website-resources/lib/components/DemoPage.types';
import * as constants from '../styles/constants';
import { IComponentPageStyles } from '@uifabric/example-app-base';
import { fullWidth, fullHeight, contentPadding } from '../styles/mixins';

export interface IPageStyles {
  u_maxTextWidth: string;
  basePage: string;
  demoPage: IDemoPageStyles;
}

// Override padding to match this website
const sectionPadding = contentPadding('50px', '50px');
const sectionStyles = { ...sectionPadding, marginTop: 0 };

export const componentPageStyles: IStyleSet<Partial<IComponentPageStyles>> = {
  root: [
    fullWidth(), // Component page has its own padding
    fullHeight(), // Remove padding at bottom of App-content
    { paddingBottom: 100 } // Pad the content instead
  ],
  overviewSection: sectionPadding,
  bestPracticesSection: sectionStyles,
  variantsSection: sectionStyles,
  implementationExamplesSection: sectionStyles
};

export const pageStyles = mergeStyleSets({
  u_maxTextWidth: { maxWidth: '50em' },
  basePage: {
    selectors: {
      h2: {
        margin: constants.uhfMarginH2
      },
      h3: {
        margin: constants.uhfMarginH3
      },
      h4: {
        margin: constants.uhfMarginH4
      },
      p: {
        marginBottom: constants.uhfMarginBottomP
      }
    }
  }
};
