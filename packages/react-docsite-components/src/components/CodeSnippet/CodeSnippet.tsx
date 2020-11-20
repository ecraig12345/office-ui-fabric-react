import * as React from 'react';
import {
  IStyleFunctionOrObject,
  ITheme,
  IStyle,
  styled,
  classNamesFunction,
  IRawStyle,
  DefaultPalette,
} from '@fluentui/react';
import { NeutralColors, SharedColors } from '@fluentui/theme';
import { baseCodeStyle, getStyles } from './CodeSnippet.styles';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// The type definitions for this package are incorrect and don't contain these files
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light';

// Import languages from SyntaxHighlighter
// @ts-ignore
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
// @ts-ignore
import scss from 'react-syntax-highlighter/dist/esm/languages/hljs/scss';
// @ts-ignore
import md from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';
// @ts-ignore
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
// @ts-ignore
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';

// Import SyntaxHighlighter styles
// @ts-ignore
import githubStyle from 'react-syntax-highlighter/dist/styles/hljs/github';
/* eslint-enable @typescript-eslint/ban-ts-comment */

const style: { [key: string]: IRawStyle } = githubStyle;

// Register languages
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('markdown', md);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('html', xml);

// Customize imported SyntaxHighlighter styles. Available properties:
// https://github.com/conorhastings/react-syntax-highlighter/blob/master/src/styles/hljs/github.js
style.hljs = {
  ...baseCodeStyle,
  padding: 8,
  overflowX: 'auto',
};
// Darken comment color for accessibility
style['hljs-comment'] = style['hljs-quote'] = {
  color: NeutralColors.gray130,
  fontStyle: 'italic',
};

style['hljs-built_in'] = style['builtin-name'] = {
  color: DefaultPalette.themeDarker,
};

style['hljs-link'] = style['hljs-regexp'] = {
  color: SharedColors.green20,
};

export interface ICodeSnippetProps {
  className?: string;
  language?: string;
  styles?: IStyleFunctionOrObject<ICodeSnippetStyleProps, ICodeSnippetStyles>;
  theme?: ITheme;
}

export type ICodeSnippetStyleProps = Pick<ICodeSnippetProps, 'className'>;

export interface ICodeSnippetStyles {
  root: IStyle;
}

const getClassNames = classNamesFunction<ICodeSnippetStyleProps, ICodeSnippetStyles>();

const languageMapping: { [key: string]: string } = {
  ts: 'typescript',
  tsx: 'typescript',
  js: 'typescript',
  javascript: 'typescript',
  jsx: 'typescript',
  shell: 'bash',
  md: 'markdown',
  css: 'scss',
};

const CodeSnippetBase: React.FunctionComponent<ICodeSnippetProps> = props => {
  const classNames = getClassNames(props.styles, { className: props.className });
  return (
    <SyntaxHighlighter
      language={languageMapping[props.language!] || props.language || 'text'}
      className={classNames.root}
      style={style}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export const CodeSnippet: React.FunctionComponent<ICodeSnippetProps> = styled<
  ICodeSnippetProps,
  ICodeSnippetStyleProps,
  ICodeSnippetStyles
>(CodeSnippetBase, getStyles, undefined, {
  scope: 'CodeSnippet',
});
