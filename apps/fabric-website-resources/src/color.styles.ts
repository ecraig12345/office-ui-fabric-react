import { mergeStyles, getTheme } from 'office-ui-fabric-react/lib/Styling';

export function applyStyles() {
  const theme = getTheme();

  mergeStyles({
    selectors: {
      ':global(.hljs)': {
        background: theme.palette.neutralDark,
        color: theme.palette.white
      },
      ':global(.hljs-comment, .hljs-quote)': {
        color: '#777'
      },
      [`:global(${[
        '.hljs-variable',
        '.hljs-template-variable',
        '.hljs-tag',
        '.hljs-regexp',
        '.hljs-meta',
        '.hljs-number',
        '.hljs-built_in',
        '.hljs-builtin-name',
        '.hljs-literal',
        '.hljs-params',
        '.hljs-symbol',
        '.hljs-bullet',
        '.hljs-link',
        '.hljs-deletion'
      ].join(', ')})`]: {
        color: '#ab875d'
      },
      [`:global(${[
        // prettier-ignore
        '.hljs-section',
        '.hljs-title',
        '.hljs-name',
        '.hljs-selector-id',
        '.hljs-selector-class',
        '.hljs-type',
        '.hljs-attribute'
      ].join(', ')})`]: {
        color: '#9b869b'
      },
      [`:global(${[
        // prettier-ignore
        '.hljs-string',
        '.hljs-keyword',
        '.hljs-selector-tag',
        '.hljs-addition'
      ].join(', ')})`]: {
        color: '#8f9c6c'
      },
      ':global(.hljs-emphasis)': {
        fontStyle: 'italic'
      },
      ':global(.hljs-strong)': {
        fontWeight: 'bold'
      }
    }
  });
}
