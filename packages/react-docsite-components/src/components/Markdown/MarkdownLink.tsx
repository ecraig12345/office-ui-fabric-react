import * as React from 'react';
import { Link, ILinkProps, ILinkStyleProps, ILinkStyles } from '@fluentui/react/lib/Link';
import { removeAnchorLink } from '../../utilities/index2';
import { IStyleFunction } from 'office-ui-fabric-react';
import { getLinkColors } from '../../utilities/getLinkColors';

const styles: IStyleFunction<ILinkStyleProps, ILinkStyles> = props => {
  const { semanticColors } = props.theme!;
  return {
    // UHF overrides
    root: getLinkColors(semanticColors.link, semanticColors.linkHovered),
  };
};

export const MarkdownLink: React.FunctionComponent<ILinkProps> = props => {
  let href = props.href;
  if (href && href[0] === '#' && href.indexOf('/') === -1) {
    // This is an anchor link within this page. We need to prepend the current route.
    href = removeAnchorLink(location.hash) + href;
  }

  return <Link {...props} href={href} styles={styles} />;
};
