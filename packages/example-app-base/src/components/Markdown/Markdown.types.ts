import { IImageProps, ITheme, IStyleFunctionOrObject, IStyle, ILinkStyleProps, IImageStyleProps } from 'office-ui-fabric-react';
import { IMarkdownHeaderStyleProps } from './MarkdownHeader';
import { IMarkdownImageSetStyleProps } from './MarkdownImageSet';
import { IMarkdownParagraphStyleProps } from './MarkdownParagraph';
import { IMarkdownCodeStyleProps } from './MarkdownCode';
import { IMarkdownTableStyleProps } from './MarkdownTable/index';

export interface IMarkdownResources {
  images?: {
    [key: string]: IImageProps;
  };
}

export interface IMarkdownProps {
  resources?: IMarkdownResources;
  className?: string;
  children: string;

  /** Theme provided by higher-order component. */
  theme?: ITheme;

  /** Optional override styles */
  styles?: IStyleFunctionOrObject<IMarkdownStyleProps, IMarkdownStyles>;
}

export type IMarkdownStyleProps = Required<Pick<IMarkdownProps, 'theme'>>;

export interface IMarkdownStyles {
  root: IStyle;
  subComponentStyles: IMarkdownSubComponentStyles;
}

export interface IMarkdownSubComponentStyles {
  // TODO: remove anys
  // tslint:disable:no-any
  pageHeader: IStyleFunctionOrObject<IMarkdownHeaderStyleProps, any>;
  pageImageSet: IStyleFunctionOrObject<IMarkdownImageSetStyleProps, any>;
  pageParagraph: IStyleFunctionOrObject<IMarkdownParagraphStyleProps, any>;
  pageTag: IStyleFunctionOrObject<IMarkdownCodeStyleProps, any>;
  link: IStyleFunctionOrObject<ILinkStyleProps, any>;
  image: IStyleFunctionOrObject<IImageStyleProps, any>;
  button: IStyleFunctionOrObject<any, any>;
  table: IStyleFunctionOrObject<IMarkdownTableStyleProps, any>;
  thead: IStyleFunctionOrObject<IMarkdownTableStyleProps, any>;
  tbody: IStyleFunctionOrObject<IMarkdownTableStyleProps, any>;
  tr: IStyleFunctionOrObject<IMarkdownTableStyleProps, any>;
  th: IStyleFunctionOrObject<IMarkdownTableStyleProps, any>;
  td: IStyleFunctionOrObject<IMarkdownTableStyleProps, any>;
}
