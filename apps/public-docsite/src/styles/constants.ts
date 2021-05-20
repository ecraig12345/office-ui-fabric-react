import { ScreenWidthMinUhfMobile, ScreenWidthMinXLarge } from '@fluentui/react/lib/Styling';
import {
  appPaddingLg,
  appPaddingMd,
  appPaddingSm,
  contentWidth,
  ScreenWidthMaxUhfMobile,
} from '@fluentui/react-docsite-components/lib/styles/constants';

export * from '@fluentui/react-docsite-components/lib/styles/constants';

export const appPadding = {
  large: appPaddingLg,
  medium: appPaddingMd,
  small: appPaddingSm,
};

const navWidthLg = 302;
export const topNavHeight = 52;

// We want the text to appear the same distance from the body and the nav. It include 8 padding already.
const sideRailPaddingLeft = appPaddingMd - 8;
const sideRailWidth = 182 + sideRailPaddingLeft;

// Padding matches padding used by UHF at the same (lg / sm) UHF breakpoints
const uhfPaddingLg = 32;
const contentPadding = appPaddingSm;
// Left padding + Nav + Body and Content Padding + Content + SideRail + Right padding.
export const appMaximumWidthLg =
  uhfPaddingLg + navWidthLg + appPaddingMd + contentPadding * 2 + contentWidth + sideRailWidth + uhfPaddingLg;

// Note: using 0.1 because anything smaller seems to be rounded, causing weird rendering if the
// window is exactly 768px wide
const ScreenWidthMaxXLarge = ScreenWidthMinXLarge - 0.1;

export const mediaQuery = {
  minMobile: `@media only screen and (min-width: ${ScreenWidthMinUhfMobile}px)`,
  maxMobile: `@media only screen and (max-width: ${ScreenWidthMaxUhfMobile}px)`,
  minLarge: `@media only screen and (min-width: ${ScreenWidthMinXLarge}px)`,
  maxLarge: `@media only screen and (max-width: ${ScreenWidthMaxXLarge}px)`,
};
