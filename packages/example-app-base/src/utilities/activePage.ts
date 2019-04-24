import { getPathMinusLastHash } from './getPathMinusLastHash';

const _urlResolver = document.createElement('a');

export function isPageActive(componentUrl: string): boolean {
  if (!componentUrl) {
    return false;
  }

  _urlResolver.href = componentUrl || '';
  const target: string = _urlResolver.href;
  let path = location.href;

  const exact = location.protocol + '//' + location.host + location.pathname;
  if (exact === target) {
    return true;
  }

  const hashCount = path.split('#').length - 1;
  if (hashCount > 1) {
    path = getPathMinusLastHash(path);
  }

  if (path === target) {
    return true;
  }

  return false;
}

// TODO: use real INavPage
export interface IMinNavPage {
  url?: string;
  pages?: IMinNavPage[];
}

export function hasActiveChild(page: IMinNavPage): boolean {
  if (!page) {
    return false;
  }

  if (page.url && isPageActive(page.url)) {
    return true;
  }

  let _hasActiveChild = false;
  const pages = page.pages || [];

  if (pages.length > 0) {
    for (const childPage of pages) {
      if (childPage.url && isPageActive(childPage.url)) {
        _hasActiveChild = true;
        break;
      }

      if (childPage.pages) {
        _hasActiveChild = hasActiveChild(childPage);
        if (_hasActiveChild) {
          break;
        }
      }
    }
  }

  return _hasActiveChild;
}
