// @public (undocumented)
declare const AnimationClassNames: {
    [key in keyof IAnimationStyles]?: string;
};

// @public
declare const AnimationStyles: IAnimationStyles;

// @public
declare const AnimationVariables: IAnimationVariables;

// @public
declare function buildClassMap<T>(styles: T): {
    [key in keyof T]?: string;
};

// Warning: (ae-forgotten-export) The symbol "IColorClassNames" needs to be exported by the entry point index.d.ts
// 
// @public (undocumented)
declare const ColorClassNames: IColorClassNames;

export { concatStyleSets } from '@uifabric/merge-styles';
// @public (undocumented)
declare function createFontStyles(localeCode: string | null): IFontStyles;

// @public
declare function createTheme(theme: IPartialTheme, depComments?: boolean): ITheme;

// @public (undocumented)
declare const DefaultFontStyles: IFontStyles;

// @public (undocumented)
declare const DefaultPalette: IPalette;

// @public
declare function focusClear(): IRawStyle;

// @public (undocumented)
declare const FontClassNames: {
    [key in keyof IFontStyles]?: string;
};

export { fontFace } from '@uifabric/merge-styles';
// @public (undocumented)
declare namespace FontSizes {
    const // (undocumented)
    mini: string;
    const // (undocumented)
    xSmall: string;
    const // (undocumented)
    small: string;
    const // (undocumented)
    smallPlus: string;
    const // (undocumented)
    medium: string;
    const // (undocumented)
    mediumPlus: string;
    const // (undocumented)
    icon: string;
    const // (undocumented)
    large: string;
    const // (undocumented)
    xLarge: string;
    const // (undocumented)
    xxLarge: string;
    const // (undocumented)
    superLarge: string;
    const // (undocumented)
    mega: string;
}

// @public (undocumented)
declare namespace FontWeights {
    const // (undocumented)
    light: IFontWeight;
    const // (undocumented)
    semilight: IFontWeight;
    const // (undocumented)
    regular: IFontWeight;
    const // (undocumented)
    semibold: IFontWeight;
    const // (undocumented)
    bold: IFontWeight;
}

// @public
declare function getFadedOverflowStyle(theme: ITheme, color?: keyof ISemanticColors | keyof IPalette, direction?: 'horizontal' | 'vertical', width?: string | number, height?: string | number): IRawStyle;

// @public
declare function getFocusStyle(theme: ITheme, inset?: number, position?: 'relative' | 'absolute', highContrastStyle?: IRawStyle | undefined, borderColor?: string, outlineColor?: string, isFocusedOnly?: boolean): IRawStyle;

// @public
declare function getGlobalClassNames<T>(classNames: GlobalClassNames<T>, theme: ITheme, disableGlobalClassNames?: boolean): Partial<GlobalClassNames<T>>;

// @public
declare function getIcon(name?: string): IIconRecord | undefined;

// @public
declare function getIconClassName(name: string): string;

// @public (undocumented)
declare function getScreenSelector(min: number, max: number): string;

// @public
declare function getTheme(depComments?: boolean): ITheme;

// @internal
declare function getThemedContext(context: ICustomizerContext, scheme?: ISchemeNames, theme?: ITheme): ICustomizerContext;

// @public (undocumented)
declare type GlobalClassNames<IStyles> = Record<keyof IStyles, string>;

// @public (undocumented)
declare const hiddenContentStyle: IRawStyle;

// @public (undocumented)
declare const HighContrastSelector = "@media screen and (-ms-high-contrast: active)";

// @public (undocumented)
declare const HighContrastSelectorBlack = "@media screen and (-ms-high-contrast: white-on-black)";

// @public (undocumented)
declare const HighContrastSelectorWhite = "@media screen and (-ms-high-contrast: black-on-white)";

// @public
interface IAnimationStyles {
    // (undocumented)
    fadeIn100: IRawStyle;
    // (undocumented)
    fadeIn200: IRawStyle;
    // (undocumented)
    fadeIn400: IRawStyle;
    // (undocumented)
    fadeIn500: IRawStyle;
    // (undocumented)
    fadeOut100: IRawStyle;
    // (undocumented)
    fadeOut200: IRawStyle;
    // (undocumented)
    fadeOut400: IRawStyle;
    // (undocumented)
    fadeOut500: IRawStyle;
    // (undocumented)
    rotate90deg: IRawStyle;
    // (undocumented)
    rotateN90deg: IRawStyle;
    // (undocumented)
    scaleDownIn100: IRawStyle;
    // (undocumented)
    scaleDownOut98: IRawStyle;
    // (undocumented)
    scaleUpIn100: IRawStyle;
    // (undocumented)
    scaleUpOut103: IRawStyle;
    // (undocumented)
    slideDownIn10: IRawStyle;
    // (undocumented)
    slideDownIn20: IRawStyle;
    // (undocumented)
    slideDownOut10: IRawStyle;
    // (undocumented)
    slideDownOut20: IRawStyle;
    // (undocumented)
    slideLeftIn10: IRawStyle;
    // (undocumented)
    slideLeftIn20: IRawStyle;
    // (undocumented)
    slideLeftIn40: IRawStyle;
    // (undocumented)
    slideLeftIn400: IRawStyle;
    // (undocumented)
    slideLeftOut10: IRawStyle;
    // (undocumented)
    slideLeftOut20: IRawStyle;
    // (undocumented)
    slideLeftOut40: IRawStyle;
    // (undocumented)
    slideLeftOut400: IRawStyle;
    // (undocumented)
    slideRightIn10: IRawStyle;
    // (undocumented)
    slideRightIn20: IRawStyle;
    // (undocumented)
    slideRightIn40: IRawStyle;
    // (undocumented)
    slideRightIn400: IRawStyle;
    // (undocumented)
    slideRightOut10: IRawStyle;
    // (undocumented)
    slideRightOut20: IRawStyle;
    // (undocumented)
    slideRightOut40: IRawStyle;
    // (undocumented)
    slideRightOut400: IRawStyle;
    // (undocumented)
    slideUpIn10: IRawStyle;
    // (undocumented)
    slideUpIn20: IRawStyle;
    // (undocumented)
    slideUpOut10: IRawStyle;
    // (undocumented)
    slideUpOut20: IRawStyle;
}

// @public (undocumented)
interface IAnimationVariables {
    // (undocumented)
    durationValue1: string;
    // (undocumented)
    durationValue2: string;
    // (undocumented)
    durationValue3: string;
    // (undocumented)
    durationValue4: string;
    // (undocumented)
    easeFunction1: string;
    // (undocumented)
    easeFunction2: string;
}

// @public (undocumented)
declare namespace IconFontSizes {
    const // (undocumented)
    xSmall: string;
    const // (undocumented)
    small: string;
    const // (undocumented)
    medium: string;
    const // (undocumented)
    large: string;
}

// @internal
interface IEffects {
    elevation16: string;
    elevation4: string;
    elevation64: string;
    elevation8: string;
    roundedCorner2: string;
}

export { IFontFace } from '@uifabric/merge-styles';
// @public
interface IFontStyles {
    // (undocumented)
    large: IRawStyle;
    // (undocumented)
    medium: IRawStyle;
    // (undocumented)
    mediumPlus: IRawStyle;
    // (undocumented)
    mega: IRawStyle;
    // (undocumented)
    small: IRawStyle;
    // (undocumented)
    smallPlus: IRawStyle;
    // (undocumented)
    superLarge: IRawStyle;
    // (undocumented)
    tiny: IRawStyle;
    // (undocumented)
    xLarge: IRawStyle;
    // (undocumented)
    xSmall: IRawStyle;
    // (undocumented)
    xxLarge: IRawStyle;
}

export { IFontWeight } from '@uifabric/merge-styles';
// @public (undocumented)
interface IIconOptions {
    disableWarnings: boolean;
    // @deprecated (undocumented)
    warnOnMissingIcons?: boolean;
}

// @public (undocumented)
interface IIconRecord {
    // (undocumented)
    code: string | undefined;
    // Warning: (ae-forgotten-export) The symbol "IIconSubsetRecord" needs to be exported by the entry point index.d.ts
    // 
    // (undocumented)
    subset: IIconSubsetRecord;
}

// @public (undocumented)
interface IIconSubset {
    // (undocumented)
    fontFace?: IFontFace;
    // (undocumented)
    icons: {
        [key: string]: string | JSX.Element;
    };
    // (undocumented)
    style?: IRawStyle;
}

export { InjectionMode } from '@uifabric/merge-styles';
// @public
interface IPalette {
    accent: string;
    black: string;
    blackTranslucent40: string;
    blue: string;
    blueDark: string;
    blueLight: string;
    blueMid: string;
    green: string;
    greenDark: string;
    greenLight: string;
    magenta: string;
    magentaDark: string;
    magentaLight: string;
    neutralDark: string;
    neutralLight: string;
    neutralLighter: string;
    neutralLighterAlt: string;
    neutralPrimary: string;
    neutralPrimaryAlt: string;
    neutralQuaternary: string;
    neutralQuaternaryAlt: string;
    neutralSecondary: string;
    neutralSecondaryAlt: string;
    neutralTertiary: string;
    neutralTertiaryAlt: string;
    orange: string;
    orangeLight: string;
    orangeLighter: string;
    purple: string;
    purpleDark: string;
    purpleLight: string;
    red: string;
    redDark: string;
    teal: string;
    tealDark: string;
    tealLight: string;
    themeDark: string;
    themeDarkAlt: string;
    themeDarker: string;
    themeLight: string;
    themeLighter: string;
    themeLighterAlt: string;
    themePrimary: string;
    themeSecondary: string;
    themeTertiary: string;
    white: string;
    whiteTranslucent40: string;
    yellow: string;
    yellowDark: string;
    yellowLight: string;
}

// @public (undocumented)
declare type IPartialTheme = {
    palette?: Partial<IPalette>;
    fonts?: Partial<IFontStyles>;
    defaultFontStyle?: IRawStyle;
    semanticColors?: Partial<ISemanticColors>;
    isInverted?: boolean;
    disableGlobalClassNames?: boolean;
    spacing?: Partial<ISpacing>;
    effects?: Partial<IEffects>;
    schemes?: {
        [P in ISchemeNames]?: IScheme;
    };
};

export { IProcessedStyleSet } from '@uifabric/merge-styles';
export { IRawStyle } from '@uifabric/merge-styles';
// @public (undocumented)
interface IScheme {
    disableGlobalClassNames: boolean;
    // (undocumented)
    effects: IEffects;
    // (undocumented)
    fonts: IFontStyles;
    // (undocumented)
    isInverted: boolean;
    // (undocumented)
    palette: IPalette;
    // (undocumented)
    semanticColors: ISemanticColors;
    // @internal
    spacing: ISpacing;
}

// @internal
declare type ISchemeNames = 'default' | 'neutral' | 'soft' | 'strong';

// @public
interface ISemanticColors extends ISemanticTextColors {
    accentButtonBackground: string;
    blockingBackground: string;
    bodyBackground: string;
    bodyDivider: string;
    bodyFrameBackground: string;
    bodyFrameDivider: string;
    bodyStandoutBackground: string;
    buttonBackground: string;
    buttonBackgroundChecked: string;
    buttonBackgroundCheckedHovered: string;
    buttonBackgroundDisabled: string;
    buttonBackgroundHovered: string;
    buttonBackgroundPressed: string;
    buttonBorder: string;
    buttonBorderDisabled: string;
    defaultStateBackground: string;
    disabledBackground: string;
    errorBackground: string;
    focusBorder: string;
    inputBackground: string;
    inputBackgroundChecked: string;
    inputBackgroundCheckedHovered: string;
    inputBorder: string;
    inputBorderHovered: string;
    inputFocusBorderAlt: string;
    inputForegroundChecked: string;
    listBackground: string;
    listHeaderBackgroundHovered: string;
    listHeaderBackgroundPressed: string;
    listItemBackgroundChecked: string;
    listItemBackgroundCheckedHovered: string;
    listItemBackgroundHovered: string;
    listText: string;
    menuBackground: string;
    menuDivider: string;
    menuHeader: string;
    menuIcon: string;
    // @deprecated (undocumented)
    menuItemBackgroundChecked: string;
    menuItemBackgroundHovered: string;
    menuItemBackgroundPressed: string;
    menuItemText: string;
    menuItemTextHovered: string;
    primaryButtonBackground: string;
    primaryButtonBackgroundDisabled: string;
    primaryButtonBackgroundHovered: string;
    primaryButtonBackgroundPressed: string;
    primaryButtonBorder: string;
    smallInputBorder: string;
    successBackground: string;
    variantBorder: string;
    variantBorderHovered: string;
    warningBackground: string;
    warningHighlight: string;
}

// @public (undocumented)
interface ISemanticTextColors {
    accentButtonText: string;
    actionLink: string;
    actionLinkHovered: string;
    bodySubtext: string;
    bodyText: string;
    bodyTextChecked: string;
    buttonText: string;
    buttonTextChecked: string;
    buttonTextCheckedHovered: string;
    buttonTextDisabled: string;
    buttonTextHovered: string;
    buttonTextPressed: string;
    disabledBodySubtext: string;
    disabledBodyText: string;
    disabledSubtext: string;
    disabledText: string;
    errorText: string;
    inputPlaceholderText: string;
    inputText: string;
    inputTextHovered: string;
    link: string;
    linkHovered: string;
    listText: string;
    // @deprecated (undocumented)
    listTextColor: string;
    primaryButtonText: string;
    primaryButtonTextDisabled: string;
    primaryButtonTextHovered: string;
    primaryButtonTextPressed: string;
    warningText: string;
}

// @internal
interface ISpacing {
    // (undocumented)
    l1: string;
    // (undocumented)
    l2: string;
    // (undocumented)
    m: string;
    // (undocumented)
    s1: string;
    // (undocumented)
    s2: string;
}

export { IStyle } from '@uifabric/merge-styles';
export { IStyleSet } from '@uifabric/merge-styles';
export { IStyleSheetConfig } from '@uifabric/merge-styles';
// @public (undocumented)
interface ITheme extends IScheme {
    // @internal
    schemes?: {
        [P in ISchemeNames]?: IScheme;
    };
}

export { keyframes } from '@uifabric/merge-styles';
// @public
declare function loadTheme(theme: IPartialTheme, depComments?: boolean): ITheme;

export { mergeStyles } from '@uifabric/merge-styles';
export { mergeStyleSets } from '@uifabric/merge-styles';
// @public (undocumented)
declare const normalize: IRawStyle;

// @public (undocumented)
declare const noWrap: IRawStyle;

// @public (undocumented)
declare const PulsingBeaconAnimationStyles: {
    continuousPulseAnimationDouble: (beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string) => string;
    continuousPulseAnimationSingle: (beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string) => string;
    createDefaultAnimation: (animationName: string, delayLength?: string | undefined) => IRawStyle;
};

// @public (undocumented)
declare function registerDefaultFontFaces(baseUrl: string): void;

// @public
declare function registerIconAlias(iconName: string, mappedToName: string): void;

// @public
declare function registerIcons(iconSubset: IIconSubset, options?: Partial<IIconOptions>): void;

// @public
declare function registerOnThemeChangeCallback(callback: (theme: ITheme) => void): void;

// @public
declare function removeOnThemeChangeCallback(callback: (theme: ITheme) => void): void;

// @public (undocumented)
declare const ScreenWidthMaxLarge: number;

// @public (undocumented)
declare const ScreenWidthMaxMedium: number;

// @public (undocumented)
declare const ScreenWidthMaxSmall: number;

// @public (undocumented)
declare const ScreenWidthMaxXLarge: number;

// @public (undocumented)
declare const ScreenWidthMaxXXLarge: number;

// @public (undocumented)
declare const ScreenWidthMinLarge = 640;

// @public (undocumented)
declare const ScreenWidthMinMedium = 480;

// @public (undocumented)
declare const ScreenWidthMinSmall = 320;

// @public (undocumented)
declare const ScreenWidthMinUhfMobile = 768;

// @public (undocumented)
declare const ScreenWidthMinXLarge = 1024;

// @public (undocumented)
declare const ScreenWidthMinXXLarge = 1366;

// @public (undocumented)
declare const ScreenWidthMinXXXLarge = 1920;

// @public
declare function setIconOptions(options: Partial<IIconOptions>): void;

export { Stylesheet } from '@uifabric/merge-styles';
// @public (undocumented)
declare const ThemeSettingName = "theme";

// @public
declare function unregisterIcons(iconNames: string[]): void;

// @public (undocumented)
declare namespace ZIndexes {
    const // (undocumented)
    Nav: number;
    const // (undocumented)
    ScrollablePane: number;
    const // (undocumented)
    FocusStyle: number;
    const // (undocumented)
    Coachmark: number;
    const // (undocumented)
    Layer: number;
    const // (undocumented)
    KeytipLayer: number;
}


// (No @packageDocumentation comment for this package)
