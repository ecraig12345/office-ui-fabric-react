import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
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

export const componentPageStyles: Partial<IComponentPageStyles> = {
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

export const pageStyles: IPageStyles = {
  u_maxTextWidth: mergeStyles({ maxWidth: '50em' }),
  basePage: mergeStyles({
    selectors: {
      ':global(h2)': {
        margin: constants.uhfMarginH2
      },
      ':global(h3)': {
        margin: constants.uhfMarginH3
      },
      ':global(h4)': {
        margin: constants.uhfMarginH4
      },
      p: {
        marginBottom: constants.uhfMarginBottomP
      }
    }
  }),
  demoPage: {
    subComponentStyles: {
      componentPage: componentPageStyles,
      exampleCards: {},
      propertiesTable: {}
    }
  }
};
