import { ScreenWidthMinUhfMobile } from '@fluentui/react/lib/Styling';

// General use padding for consistency.
export const appPaddingLg = 52;
export const appPaddingMd = 40;
export const appPaddingSm = 28;

// Component variables
/** Target width for content area to show large breakpoint width for examples */
export const contentWidth = 1024;
export const contentPadding = appPaddingSm;

/** 767.9px */
// Note: using 0.1 because anything smaller seems to be rounded, causing weird rendering if the
// window is exactly 768px wide
export const ScreenWidthMaxUhfMobile = ScreenWidthMinUhfMobile - 0.1;
/**
 * 1199.9px. 1200px is not an official breakpoint but works well for determining when to increase
 * font sizes and spacing since the left nav appears at 1024px and makes things tight for awhile.
 */
export const ScreenWidthMaxLarger = 1200 - 0.1;
