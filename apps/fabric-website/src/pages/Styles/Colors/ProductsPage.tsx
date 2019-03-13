import * as React from 'react';
import { Markdown, ColorPalette, IColor, IColorPaletteTheme, IPageSectionProps } from '@uifabric/example-app-base/lib/index2';
import { IStylesPageProps, StylesAreaPage } from '../StylesAreaPage';
import { ColorsProductsPageProps } from './ProductsPage.doc';

import {
  AppColorPalettes,
  AppColorSwatches,
  Excel,
  Exchange,
  OneDrive,
  OneNote,
  PowerPoint,
  SharePoint,
  Skype,
  Teams,
  Word
} from './palettes/index';
import { Platforms } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

const baseUrl = websiteRepoUrl + '/src/pages/Styles/Colors/docs';

export interface IColorsProductsPageState {
  activeAppColorPalette?: IColorPaletteTheme;
  activeAppDetails?: JSX.Element;
}

export class ColorsProductsPage extends React.Component<IStylesPageProps, IColorsProductsPageState> {
  public readonly state: IColorsProductsPageState = {
    activeAppColorPalette: null,
    activeAppDetails: null
  };

  public render() {
    return (
      <StylesAreaPage
        {...this.props}
        {...ColorsProductsPageProps[this.props.platform]}
        otherSections={this._otherSections(this.props.platform)}
      />
    );
  }

  private _otherSections = (platform: Platforms): IPageSectionProps[] => {
    const { activeAppColorPalette, activeAppDetails } = this.state;
    switch (platform) {
      case 'web':
        return [
          {
            sectionName: 'Products',
            editUrl: `${baseUrl}/web/ColorsProducts.md`,
            content: (
              <>
                <Markdown>
                  {require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/Colors/docs/web/ColorsProducts.md') as string}
                </Markdown>
                <ColorPalette colors={AppColorSwatches} onColorSelected={this._changeApp} />
                {activeAppColorPalette && (
                  <>
                    <h2>{activeAppColorPalette.name}</h2>
                    <p>{activeAppColorPalette.notes}</p>
                    <ColorPalette colors={activeAppColorPalette.colors} />
                  </>
                )}
                {activeAppDetails}
              </>
            )
          },
          {
            sectionName: 'Implementation',
            editUrl: `${baseUrl}/web/ColorsImplementation.md`,
            content: (
              <Markdown>
                {require('!raw-loader!@uifabric/fabric-website/src/pages/Styles/Colors/docs/web/ColorsImplementation.md') as string}
              </Markdown>
            )
          }
        ];

      default:
        return [
          {
            sectionName: 'Coming soon',
            content: '...'
          }
        ];
    }
  };

  private _changeApp = (color: IColor) => {
    const { activeAppColorPalette } = this.state;

    // Show the active app's color palette (optional).
    const palette = AppColorPalettes.filter((_palette: IColorPaletteTheme) => _palette.name === color.name)[0];

    if (activeAppColorPalette !== palette) {
      this.setState({ activeAppColorPalette: palette });
    }

    // Show a custom view for the active app (optional).
    let appDetails: JSX.Element = null;

    switch (color.name) {
      case 'Excel':
        appDetails = <Excel />;
        break;
      case 'Exchange':
        appDetails = <Exchange />;
        break;
      case 'OneDrive':
        appDetails = <OneDrive />;
        break;
      case 'OneNote':
        appDetails = <OneNote />;
        break;
      case 'PowerPoint':
        appDetails = <PowerPoint />;
        break;
      case 'SharePoint':
        appDetails = <SharePoint />;
        break;
      case 'Skype':
        appDetails = <Skype />;
        break;
      case 'Teams':
        appDetails = <Teams />;
        break;
      case 'Word':
        appDetails = <Word />;
        break;
      default:
        break;
    }

    this.setState({
      activeAppDetails: appDetails
    });
  };
}
