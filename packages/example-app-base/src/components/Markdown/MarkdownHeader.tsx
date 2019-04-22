import * as React from 'react';
import { classNamesFunction, IStyleFunctionOrObject, styled, IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';
import { ITheme, IStyle } from 'office-ui-fabric-react/lib/Styling';

/**
 * The getStyles props contract.
 */
export interface IMarkdownHeaderStyleProps {
  theme: ITheme;
  as: string;
}

/**
 * The styles produced by getStyles.
 */
export interface IMarkdownHeaderStyles {
  root: IStyle;
}

/**
 * The component props.
 */
export interface IMarkdownHeaderProps {
  as?: keyof React.ReactHTML;
  children?: React.ReactNode;
  id?: string;

  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IMarkdownHeaderStyleProps, IMarkdownHeaderStyles>;
}

const getStyles: IStyleFunction<IMarkdownHeaderStyleProps, IMarkdownHeaderStyles> = props => {
  const { fonts } = props.theme;
  return {
    root: [
      fonts.large,
      {
        margin: 0,
        padding: '8px 0 4px'
      },
      props.as === 'h1' && [
        fonts.xxLarge,
        {
          margin: 0,
          padding: '16px 0 4px'
        }
      ],
      props.as === 'h2' && [
        fonts.xLarge,
        {
          margin: 0,
          padding: '12px 0 4px'
        }
      ]
    ]
  };
};

const getClassNames = classNamesFunction<IMarkdownHeaderStyleProps, IMarkdownHeaderStyles>();

const MarkdownHeaderBase: React.FunctionComponent<IMarkdownHeaderProps> = props => {
  const { as: RootType = 'h1', theme, children, id, styles } = props;

  const classNames = getClassNames(styles, { theme: theme!, as: RootType });
  return (
    <RootType className={classNames.root} id={id}>
      {children}
    </RootType>
  );
};

export const MarkdownHeader: React.FunctionComponent<IMarkdownHeaderProps> = styled<
  IMarkdownHeaderProps,
  IMarkdownHeaderStyleProps,
  IMarkdownHeaderStyles
>(MarkdownHeaderBase, getStyles);
