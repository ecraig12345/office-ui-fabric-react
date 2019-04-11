import * as React from 'react';
import { fullWidth, fullHeight, contentPadding } from '../../styles/mixins';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { IComponentPageStyles } from '@uifabric/example-app-base';

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

export interface IComponentPageProps {}

export class ComponentPage extends React.Component<IComponentPageProps, {}> {
  public render(): JSX.Element | null {
    return <div className="ComponentPageWrapper">{this.props.children}</div>;
  }
}
