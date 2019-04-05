import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';

export interface IHeaderProps {
  title: string;
  sideLinks: { name: string; url: string }[];

  isMenuVisible: boolean;
  onIsMenuVisibleChanged?: (isMenuVisible: boolean) => void;

  isLargeDown?: boolean;

  /** Theme provided by higher-order component. */
  theme?: ITheme;

  /** Optional override styles */
  styles?: IStyleFunctionOrObject<IHeaderStyleProps, IHeaderStyles>;
}

export type IHeaderStyleProps = Pick<IHeaderProps, 'theme' | 'isLargeDown'>;

export interface IHeaderStyles {
  root: IStyle;
  title: IStyle;
  button: IStyle;
  buttons: IStyle;
}
