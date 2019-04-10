import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';
import { ITheme } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';
import { IComponentPageStyleProps, IExampleCardStyleProps, IPropertiesTableSetStyleProps } from '@uifabric/example-app-base';

export interface IDemoPageProps extends IDocPageProps {
  /** Theme provided by higher-order component. */
  theme?: ITheme;

  /** Optional override styles */
  styles?: IStyleFunctionOrObject<IDemoPageStyleProps, IDemoPageStyles>;
}

export type IDemoPageStyleProps = {};

export interface IDemoPageStyles {
  subComponentStyles: IDemoPageSubComponentStyles;
}

export interface IDemoPageSubComponentStyles {
  // TODO: remove anys after TS 3 upgrade
  componentPage: IStyleFunctionOrObject<IComponentPageStyleProps, any>;
  exampleCards: IStyleFunctionOrObject<IExampleCardStyleProps, any>;
  propertiesTable: IStyleFunctionOrObject<IPropertiesTableSetStyleProps, any>;
}
