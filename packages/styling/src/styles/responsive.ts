/** @deprecated Use `ScreenWidth.small` */
export const ScreenWidthMinSmall = 320;
/** @deprecated Use `ScreenWidth.medium` */
export const ScreenWidthMinMedium = 480;
/** @deprecated Use `ScreenWidth.large` */
export const ScreenWidthMinLarge = 640;
/** @deprecated Use `ScreenWidth.xLarge` */
export const ScreenWidthMinXLarge = 1024;
/** @deprecated Use `ScreenWidth.xxLarge` */
export const ScreenWidthMinXXLarge = 1366;
/** @deprecated Use `ScreenWidth.xxxLarge` */
export const ScreenWidthMinXXXLarge = 1920;
/** @deprecated Use `ScreenWidth.medium - 1` */
export const ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
/** @deprecated Use `ScreenWidth.large - 1` */
export const ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
/** @deprecated Use `ScreenWidth.xLarge - 1` */
export const ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
/** @deprecated Use `ScreenWidth.xxLarge - 1` */
export const ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
/** @deprecated Use `ScreenWidth.xxxLarge - 1` */
export const ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;

export const ScreenWidthMinUhfMobile = 768;

/**
 * Minimum width in pixels for each screen breakpoint.
 *
 * For example, a "medium" screen is any screen width such that `width >= ScreenWidth.Medium` and
 * `width < ScreenWidth.Large`.
 */
export enum ScreenWidth {
  small = ScreenWidthMinSmall,
  medium = ScreenWidthMinMedium,
  large = ScreenWidthMinLarge,
  xLarge = ScreenWidthMinXLarge,
  xxLarge = ScreenWidthMinXXLarge,
  xxxLarge = ScreenWidthMinXXXLarge
}

export function getScreenSelector(min: number, max: number, only: boolean = true): string {
  return `@media ${only ? 'only ' : ''}screen and (min-width: ${min}px) and (max-width: ${max}px)`;
}

export function currentBreakpoint(windowWidth?: number): ScreenWidth {
  windowWidth = windowWidth || window.innerWidth || ScreenWidth.xLarge;

  if (windowWidth < ScreenWidth.medium) {
    return ScreenWidth.small;
  } else if (windowWidth < ScreenWidth.large) {
    return ScreenWidth.medium;
  } else if (windowWidth < ScreenWidth.xLarge) {
    return ScreenWidth.large;
  } else if (windowWidth < ScreenWidth.xxLarge) {
    return ScreenWidth.xLarge;
  } else if (windowWidth < ScreenWidth.xxxLarge) {
    return ScreenWidth.xxLarge;
  } else {
    return ScreenWidth.xxxLarge;
  }
}
