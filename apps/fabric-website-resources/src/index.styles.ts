import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

export function applyStyles() {
  mergeStyles({
    selectors: {
      ':global(html, body)': {
        WebkitTapHighlightColor: 'transparent'
      }
    }
  });
}
