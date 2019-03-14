// @public
declare function addDirectionalKeyCode(which: number): void;

// @public
declare function addElementAtIndex<T>(array: T[], index: number, itemToAdd: T): T[];

// @public
declare const allowScrollOnElement: (element: HTMLElement | null, events: EventGroup) => void;

// @public
declare const anchorProperties: string[];

// @public
declare function appendFunction(parent: any, ...functions: (any)[]): () => void;

// @public
declare function arraysEqual<T>(array1: T[], array2: T[]): boolean;

// @public
declare function asAsync<TProps>(options: IAsAsyncOptions<TProps>): React.ComponentType<TProps & {
    asyncPlaceholder?: React.ReactType;
}>;

// @public
declare function assertNever(x: never): never;

// @public
declare function assign(target: any, ...args: any[]): any;

// @public
declare class Async {
    // (undocumented)
    constructor(parent?: object, onError?: (e: any) => void);
    // (undocumented)
    cancelAnimationFrame(id: number): void;
    clearImmediate(id: number): void;
    clearInterval(id: number): void;
    clearTimeout(id: number): void;
    debounce<T extends Function>(func: T, wait?: number, options?: {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }): ICancelable<T> & (() => void);
    dispose(): void;
    // (undocumented)
    protected _logError(e: any): void;
    // (undocumented)
    requestAnimationFrame(callback: () => void): number;
    setImmediate(callback: () => void): number;
    setInterval(callback: () => void, duration: number): number;
    setTimeout(callback: () => void, duration: number): number;
    throttle<T extends Function>(func: T, wait?: number, options?: {
        leading?: boolean;
        trailing?: boolean;
    }): T | (() => void);
    }

// @public @deprecated
declare function autobind<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): {
    configurable: boolean;
    get(): T;
    set(newValue: any): void;
} | void;

// @public
declare class AutoScroll {
    // (undocumented)
    constructor(element: HTMLElement);
    // (undocumented)
    dispose(): void;
    }

// @public
declare class BaseComponent<TProps extends IBaseProps = {}, TState = {}> extends React.Component<TProps, TState> {
    constructor(props: TProps, context?: any);
    protected readonly _async: Async;
    readonly className: string;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TProps, prevState: TState): void;
    componentWillUnmount(): void;
    protected readonly _disposables: IDisposable[];
    protected readonly _events: EventGroup;
    // @deprecated (undocumented)
    static onError: (errorMessage?: string, ex?: any) => void;
    // @deprecated
    protected _resolveRef(refName: string): (ref: React.ReactNode) => React.ReactNode;
    protected _skipComponentRefResolution: boolean;
    protected _updateComponentRef(currentProps: IBaseProps, newProps?: IBaseProps): void;
    protected _warnConditionallyRequiredProps(requiredProps: string[], conditionalPropName: string, condition: boolean): void;
    protected _warnDeprecations(deprecationMap: ISettingsMap<TProps>): void;
    protected _warnMutuallyExclusive(mutuallyExclusiveMap: ISettingsMap<TProps>): void;
}

// @public
declare const baseElementEvents: string[];

// @public
declare const baseElementProperties: string[];

// @public
declare const buttonProperties: string[];

// @public
declare function calculatePrecision(value: number | string): number;

// @public
declare function classNamesFunction<TStyleProps extends {}, TStyleSet extends IStyleSet<TStyleSet>>(): (getStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet> | undefined, styleProps?: TStyleProps) => IProcessedStyleSet<TStyleSet>;

// @public
declare function createArray<T>(size: number, getItem: (index: number) => T): T[];

// @public @deprecated (undocumented)
declare function createRef<T>(): RefObject<T>;

// @public
declare function css(...args: ICssInput[]): string;

// @public (undocumented)
declare function customizable(scope: string, fields: string[], concatStyles?: boolean): <P>(ComposedComponent: React.ComponentType<P>) => any;

// @public (undocumented)
declare class Customizations {
    // (undocumented)
    static applyScopedSettings(scopeName: string, settings: ISettings): void;
    // (undocumented)
    static applySettings(settings: ISettings): void;
    // (undocumented)
    static getSettings(properties: string[], scopeName?: string, localSettings?: ICustomizations): any;
    // (undocumented)
    static observe(onChange: () => void): void;
    // (undocumented)
    static reset(): void;
    // (undocumented)
    static unobserve(onChange: () => void): void;
}

// @public
declare class Customizer extends BaseComponent<ICustomizerProps> {
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    render(): React.ReactElement<{}>;
}

// @public (undocumented)
declare const CustomizerContext: React.Context<ICustomizerContext>;

// @public
declare const DATA_IS_SCROLLABLE_ATTRIBUTE = "data-is-scrollable";

// @public (undocumented)
declare const DATA_PORTAL_ATTRIBUTE = "data-portal-element";

// @public
declare class DelayedRender extends React.Component<IDelayedRenderProps, IDelayedRenderState> {
    // (undocumented)
    constructor(props: IDelayedRenderProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: {
        delay: number;
    };
    // (undocumented)
    render(): React.ReactElement<{}> | null;
    }

// @public
declare function disableBodyScroll(): void;

// @public
declare const divProperties: string[];

// @public
declare function doesElementContainFocus(element: HTMLElement): boolean;

// @public
declare function elementContains(parent: HTMLElement | null, child: HTMLElement | null, allowVirtualParents?: boolean): boolean;

// @public
declare function elementContainsAttribute(element: HTMLElement, attribute: string): string | null;

// @public
declare function enableBodyScroll(): void;

// @public
declare class EventGroup {
    constructor(parent: any);
    declare(event: string | string[]): void;
    // (undocumented)
    dispose(): void;
    static isDeclared(target: any, eventName: string): boolean;
    // (undocumented)
    static isObserved(target: any, eventName: string): boolean;
    // (undocumented)
    off(target?: any, eventName?: string, callback?: (args?: any) => void, options?: boolean | AddEventListenerOptions): void;
    on(target: any, eventName: string, callback: (args?: any) => void, options?: boolean | AddEventListenerOptions): void;
    onAll(target: any, events: {
        [key: string]: (args?: any) => void;
    }, useCapture?: boolean): void;
    static raise(target: any, eventName: string, eventArgs?: any, bubbleEvent?: boolean): boolean | undefined;
    raise(eventName: string, eventArgs?: any, bubbleEvent?: boolean): boolean | undefined;
    // (undocumented)
    static stopPropagation(event: any): void;
    }

// Warning: (ae-forgotten-export) The symbol "React" needs to be exported by the entry point index.d.ts
// 
// @public
declare function extendComponent<T extends React_2.Component>(parent: T, methods: {
    [key in keyof T]?: T[key];
}): void;

// @public
declare class FabricPerformance {
    static measure(name: string, func: () => void): void;
    // (undocumented)
    static reset(): void;
    // (undocumented)
    static setPeriodicReset(): void;
    // (undocumented)
    static summary: IPerfSummary;
    }

// @public
declare function filteredAssign(isAllowed: (propName: string) => boolean, target: any, ...args: any[]): any;

// @public
declare function find<T>(array: T[], cb: (item: T, index: number) => boolean): T | undefined;

// @public
declare function findElementRecursive(element: HTMLElement | null, matchFunction: (element: HTMLElement) => boolean): HTMLElement | null;

// @public
declare function findIndex<T>(array: T[], cb: (item: T, index: number) => boolean): number;

// @public
declare function findScrollableParent(startingElement: HTMLElement | null): HTMLElement | null;

// @public
declare function fitContentToBounds(options: IFitContentToBoundsOptions): ISize;

// @public
declare type FitMode = 'contain' | 'cover';

// @public
declare function flatten<T>(array: (T | T[])[]): T[];

// @public
declare function focusAsync(element: HTMLElement | {
    focus: () => void;
} | undefined | null): void;

// @public
declare function focusFirstChild(rootElement: HTMLElement): boolean;

// @public
declare function format(s: string, ...values: any[]): string;

// @public
declare function getChildren(parent: HTMLElement, allowVirtualChildren?: boolean): HTMLElement[];

// @public
declare function getDistanceBetweenPoints(point1: IPoint, point2: IPoint): number;

// @public
declare function getDocument(rootElement?: HTMLElement | null): Document | undefined;

// @public
declare function getElementIndexPath(fromElement: HTMLElement, toElement: HTMLElement): number[];

// @public
declare function getFirstFocusable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;

// @public
declare function getFirstTabbable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean, checkNode?: boolean): HTMLElement | null;

// @public
declare function getFocusableByIndexPath(parent: HTMLElement, path: number[]): HTMLElement | undefined;

// @public
declare function getId(prefix?: string): string;

// @public
declare function getInitials(displayName: string | undefined | null, isRtl: boolean, allowPhoneInitials?: boolean): string;

// @public
declare function getLanguage(): string | null;

// @public
declare function getLastFocusable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;

// @public
declare function getLastTabbable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean, checkNode?: boolean): HTMLElement | null;

// @public
declare function getNativeProps<T>(props: {}, allowedPropNames: string[], excludedPropNames?: string[]): T;

// @public
declare function getNextElement(rootElement: HTMLElement, currentElement: HTMLElement | null, checkNode?: boolean, suppressParentTraversal?: boolean, suppressChildTraversal?: boolean, includeElementsInFocusZones?: boolean, allowFocusRoot?: boolean, tabbable?: boolean): HTMLElement | null;

// @public
declare function getParent(child: HTMLElement, allowVirtualParents?: boolean): HTMLElement | null;

// @public
declare function getPreviousElement(rootElement: HTMLElement, currentElement: HTMLElement | null, checkNode?: boolean, suppressParentTraversal?: boolean, traverseChildren?: boolean, includeElementsInFocusZones?: boolean, allowFocusRoot?: boolean, tabbable?: boolean): HTMLElement | null;

// @public
declare function getRect(element: HTMLElement | Window | null): IRectangle | undefined;

// @public
declare function getResourceUrl(url: string): string;

// @public
declare function getRTL(): boolean;

// @public
declare function getRTLSafeKeyCode(key: number): number;

// @public
declare function getScrollbarWidth(): number;

// @public
declare function getVirtualParent(child: HTMLElement): HTMLElement | undefined;

// @public
declare function getWindow(rootElement?: Element | null): Window | undefined;

// @public
declare class GlobalSettings {
    // (undocumented)
    static addChangeListener(cb: IChangeEventCallback): void;
    // (undocumented)
    static getValue<T>(key: string, defaultValue?: T | (() => T)): T;
    // (undocumented)
    static removeChangeListener(cb: IChangeEventCallback): void;
    // (undocumented)
    static setValue<T>(key: string, value: T): T;
}

// @public
declare function hasHorizontalOverflow(element: HTMLElement): boolean;

// @public
declare function hasOverflow(element: HTMLElement): boolean;

// @public
declare function hasVerticalOverflow(element: HTMLElement): boolean;

// @public
declare function hoistMethods(destination: any, source: any, exclusions?: string[]): string[];

// @public
declare function hoistStatics<TSource, TDest>(source: TSource, dest: TDest): TDest;

// @public
declare const htmlElementProperties: string[];

// @public (undocumented)
interface IAsAsyncOptions<TProps> {
    load: () => Promise<React.ReactType<TProps>>;
    onError?: (error: Error) => void;
    onLoad?: () => void;
}

// @public
interface IBaseProps<T = any> {
    // (undocumented)
    componentRef?: IRefObject<T>;
}

// @public (undocumented)
declare type ICancelable<T> = {
    flush: () => T;
    cancel: () => void;
    pending: () => boolean;
};

// @public
interface IChangeDescription {
    // (undocumented)
    key: string;
    // (undocumented)
    oldValue: any;
    // (undocumented)
    value: any;
}

// @public
interface IChangeEventCallback {
    // (undocumented)
    (changeDescription?: IChangeDescription): void;
    // (undocumented)
    __id__?: string;
}

// @public @deprecated (undocumented)
declare type IClassNames<T> = {
    [key in keyof T]: string;
};

// @public
declare type IComponentAs<T> = React_2.ComponentType<IComponentAsProps<T>>;

// @public
declare type IComponentAsProps<T> = T & {
    defaultRender?: React_2.ComponentType<T>;
};

// @internal
declare type ICssInput = string | ISerializableObject | IDictionary | null | undefined | boolean;

// @public (undocumented)
interface ICustomizableProps {
    fields?: string[];
    scope: string;
}

// @public (undocumented)
interface ICustomizations {
    // (undocumented)
    inCustomizerContext?: boolean;
    // (undocumented)
    scopedSettings: {
        [key: string]: ISettings;
    };
    // (undocumented)
    settings: ISettings;
}

// @public (undocumented)
interface ICustomizerContext {
    // (undocumented)
    customizations: ICustomizations;
}

// @public (undocumented)
declare type ICustomizerProps = IBaseProps & Partial<{
    settings: ISettings | ISettingsFunction;
    scopedSettings: ISettings | ISettingsFunction;
}> & {
    contextTransform?: (context: Readonly<ICustomizerContext>) => ICustomizerContext;
};

// @internal
interface IDeclaredEventsByName {
    // (undocumented)
    [eventName: string]: boolean;
}

// @public
interface IDelayedRenderProps extends React.Props<{}> {
    delay?: number;
}

// @internal
interface IDelayedRenderState {
    isRendered: boolean;
}

// @internal
interface IDictionary {
    // (undocumented)
    [className: string]: boolean;
}

// @public
interface IDisposable {
    // (undocumented)
    dispose: () => void;
}

// @internal
interface IEventRecord {
    // (undocumented)
    callback: (args?: any) => void;
    // (undocumented)
    elementCallback?: (...args: any[]) => void;
    // (undocumented)
    eventName: string;
    // (undocumented)
    objectCallback?: (args?: any) => void;
    // (undocumented)
    options?: boolean | AddEventListenerOptions;
    // (undocumented)
    parent: any;
    // (undocumented)
    target: any;
}

// @internal
interface IEventRecordList {
    // (undocumented)
    [id: string]: IEventRecord[] | number;
    // (undocumented)
    count: number;
}

// @internal
interface IEventRecordsByName {
    // (undocumented)
    [eventName: string]: IEventRecordList;
}

// @public
interface IFitContentToBoundsOptions {
    boundsSize: ISize;
    contentSize: ISize;
    maxScale?: number;
    mode: FitMode;
}

// @public
declare const imageProperties: string[];

// @public
declare function initializeComponentRef<TProps extends IBaseProps, TState>(obj: React_2.Component<TProps, TState>): void;

// @public
declare function initializeFocusRects(window?: Window): void;

// @public
declare const inputProperties: string[];

// @internal
interface IPerfData {
    // (undocumented)
    duration: number;
    // (undocumented)
    timeStamp: number;
}

// @internal
interface IPerfMeasurement {
    // (undocumented)
    all: IPerfData[];
    // (undocumented)
    count: number;
    // (undocumented)
    totalDuration: number;
}

// @internal
interface IPerfSummary {
    // (undocumented)
    [key: string]: IPerfMeasurement;
}

// @public
interface IPoint {
    // (undocumented)
    x: number;
    // (undocumented)
    y: number;
}

// @public (undocumented)
interface IPropsWithStyles<TStyleProps, TStyleSet extends IStyleSet<TStyleSet>> {
    // (undocumented)
    styles?: IStyleFunctionOrObject<TStyleProps, TStyleSet>;
}

// @public
interface IRectangle {
    // (undocumented)
    bottom?: number;
    // (undocumented)
    height: number;
    // (undocumented)
    left: number;
    // (undocumented)
    right?: number;
    // (undocumented)
    top: number;
    // (undocumented)
    width: number;
}

// @public (undocumented)
declare type IRefObject<T> = React.RefObject<T> | RefObject<T> | ((ref: T | null) => void);

// @public
interface IRenderComponent<TProps> {
    children: (props: TProps) => JSX.Element;
}

// @public
interface IRenderFunction<P> {
    // (undocumented)
    (props?: P, defaultRender?: (props?: P) => JSX.Element | null): JSX.Element | null;
}

// @public
declare function isDirectionalKeyCode(which: number): boolean;

// @public
declare function isElementFocusSubZone(element?: HTMLElement): boolean;

// @public
declare function isElementFocusZone(element?: HTMLElement): boolean;

// @public
declare function isElementTabbable(element: HTMLElement, checkTabIndex?: boolean): boolean;

// @public
declare function isElementVisible(element: HTMLElement | undefined | null): boolean;

// @internal
interface ISerializableObject {
    // (undocumented)
    toString?: () => string;
}

// @public (undocumented)
declare type ISettings = {
    [key: string]: any;
};

// @public (undocumented)
declare type ISettingsFunction = (settings: ISettings) => ISettings;

// @public (undocumented)
declare type ISettingsMap<T> = {
    [P in keyof T]?: string;
};

// @public (undocumented)
declare const IsFocusVisibleClassName = "ms-Fabric--isFocusVisible";

// @public
declare const isIOS: () => boolean;

// @public (undocumented)
interface ISize {
    // (undocumented)
    height: number;
    // (undocumented)
    width: number;
}

// @public
declare function isMac(reset?: boolean): boolean;

export { IStyleFunction } from '@uifabric/merge-styles';
export { IStyleFunctionOrObject } from '@uifabric/merge-styles';
// @public
declare function isVirtualElement(element: HTMLElement | IVirtualElement): element is IVirtualElement;

// @public
interface IVirtualElement extends HTMLElement {
    // (undocumented)
    _virtual: {
        parent?: IVirtualElement;
        children: IVirtualElement[];
    };
}

// @public
declare const KeyCodes: {
    backspace: 8;
    tab: 9;
    enter: 13;
    shift: 16;
    ctrl: 17;
    alt: 18;
    pauseBreak: 19;
    capslock: 20;
    escape: 27;
    space: 32;
    pageUp: 33;
    pageDown: 34;
    end: 35;
    home: 36;
    left: 37;
    up: 38;
    right: 39;
    down: 40;
    insert: 45;
    del: 46;
    zero: 48;
    one: 49;
    two: 50;
    three: 51;
    four: 52;
    five: 53;
    six: 54;
    seven: 55;
    eight: 56;
    nine: 57;
    a: 65;
    b: 66;
    c: 67;
    d: 68;
    e: 69;
    f: 70;
    g: 71;
    h: 72;
    i: 73;
    j: 74;
    k: 75;
    l: 76;
    m: 77;
    n: 78;
    o: 79;
    p: 80;
    q: 81;
    r: 82;
    s: 83;
    t: 84;
    u: 85;
    v: 86;
    w: 87;
    x: 88;
    y: 89;
    z: 90;
    leftWindow: 91;
    rightWindow: 92;
    select: 93;
    zero_numpad: 96;
    one_numpad: 97;
    two_numpad: 98;
    three_numpad: 99;
    four_numpad: 100;
    five_numpad: 101;
    six_numpad: 102;
    seven_numpad: 103;
    eight_numpad: 104;
    nine_numpad: 105;
    multiply: 106;
    add: 107;
    subtract: 109;
    decimalPoint: 110;
    divide: 111;
    f1: 112;
    f2: 113;
    f3: 114;
    f4: 115;
    f5: 116;
    f6: 117;
    f7: 118;
    f8: 119;
    f9: 120;
    f10: 121;
    f11: 122;
    f12: 123;
    numlock: 144;
    scrollLock: 145;
    semicolon: 186;
    equalSign: 187;
    comma: 188;
    dash: 189;
    period: 190;
    forwardSlash: 191;
    graveAccent: 192;
    openBracket: 219;
    backSlash: 220;
    closeBracket: 221;
    singleQuote: 222;
};

// @public (undocumented)
declare type KeyCodes = number;

// @public (undocumented)
declare function mapEnumByName<T>(theEnum: any, callback: (name?: string, value?: string | number) => T | undefined): (T | undefined)[] | undefined;

// @public
declare function memoize<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): {
    configurable: boolean;
    get(): T;
};

// @public
declare function memoizeFunction<T extends (...args: any[]) => RET_TYPE, RET_TYPE>(cb: T, maxCacheSize?: number): T;

// @public
declare function merge<T = {}>(target: Partial<T>, ...args: (Partial<T> | null | undefined | false)[]): T;

// @public
declare function mergeAriaAttributeValues(...ariaAttributes: (string | undefined)[]): string | undefined;

// @public
declare function mergeCustomizations(props: ICustomizerProps, parentContext: ICustomizerContext): ICustomizerContext;

// @public (undocumented)
declare function mergeScopedSettings(oldSettings?: ISettings, newSettings?: ISettings | ISettingsFunction): ISettings;

// @public
declare function mergeSettings(oldSettings?: ISettings, newSettings?: ISettings | ISettingsFunction): ISettings;

// @public
declare function nullRender(): JSX.Element | null;

// @public (undocumented)
declare function on(element: Element | Window, eventName: string, callback: (ev: Event) => void, options?: boolean): () => void;

// @public
declare function portalContainsElement(target: HTMLElement, parent?: HTMLElement): boolean;

// @public
declare function precisionRound(value: number, precision: number, base?: number): number;

// @public @deprecated (undocumented)
declare function provideContext<TContext, TProps>(contextTypes: PropTypes.ValidationMap<TContext>, mapPropsToContext: (props: TProps) => TContext): React.ComponentType<TProps>;

// @public
declare function raiseClick(target: Element): void;

// @public
declare class Rectangle {
    // (undocumented)
    constructor(left?: number, right?: number, top?: number, bottom?: number);
    // (undocumented)
    bottom: number;
    equals(rect: Rectangle): boolean;
    readonly height: number;
    // (undocumented)
    left: number;
    // (undocumented)
    right: number;
    // (undocumented)
    top: number;
    readonly width: number;
}

// @public (undocumented)
declare type RefObject<T> = {
    (component: T | null): void;
    current: T | null;
    value: T | null;
};

// @public
declare function removeIndex<T>(array: T[], index: number): T[];

// @public
declare function replaceElement<T>(array: T[], newElement: T, index: number): T[];

// @public
declare function resetIds(counter?: number): void;

// @public
declare function resetMemoizations(): void;

// @public
declare function setBaseUrl(baseUrl: string): void;

// @public
declare function setLanguage(language: string, avoidPersisting?: boolean): void;

// @internal
declare function setMemoizeWeakMap(weakMap: any): void;

// @public
declare function setPortalAttribute(element: HTMLElement): void;

// @public
declare function setRTL(isRTL: boolean, persistSetting?: boolean): void;

// @public
declare function setSSR(isEnabled: boolean): void;

// @public @deprecated (undocumented)
declare type Settings = ISettings;

// @public @deprecated (undocumented)
declare type SettingsFunction = ISettingsFunction;

// @public
declare function setVirtualParent(child: HTMLElement, parent: HTMLElement): void;

// @public
declare function setWarningCallback(warningCallback?: (message: string) => void): void;

// @public
declare function shallowCompare<TA, TB>(a: TA, b: TB): boolean;

// @public
declare function shouldWrapFocus(element: HTMLElement, noWrapDataAttribute: 'data-no-vertical-wrap' | 'data-no-horizontal-wrap'): boolean;

// @public
declare function styled<TComponentProps extends IPropsWithStyles<TStyleProps, TStyleSet>, TStyleProps, TStyleSet extends IStyleSet<TStyleSet>>(Component: React.ComponentClass<TComponentProps> | React.StatelessComponent<TComponentProps>, baseStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet>, getProps?: (props: TComponentProps) => Partial<TComponentProps>, customizable?: ICustomizableProps): React.StatelessComponent<TComponentProps>;

// @public
declare const textAreaProperties: string[];

// @public
declare function toMatrix<T>(items: T[], columnCount: number): T[][];

// @public
declare function unhoistMethods(source: any, methodNames: string[]): void;

// @public
declare function values<T>(obj: any): T[];

// @public
declare function warn(message: string): void;

// @public
declare function warnConditionallyRequiredProps<P>(componentName: string, props: P, requiredProps: string[], conditionalPropName: string, condition: boolean): void;

// @public
declare function warnDeprecations<P>(componentName: string, props: P, deprecationMap: ISettingsMap<P>): void;

// @public
declare function warnMutuallyExclusive<P>(componentName: string, props: P, exclusiveMap: ISettingsMap<P>): void;


// (No @packageDocumentation comment for this package)
