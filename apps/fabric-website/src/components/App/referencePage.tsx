import * as React from 'react';
// Props
import { INavPage } from '../Nav/Nav.types';
import { ComponentPage } from '../ComponentPage/ComponentPage';
import { PageHeader } from '../PageHeader/PageHeader';
// Giving the loading component a height so that the left nav loads in full screen and there is less flashing as the component page loads.
const loadingPageHeight: string = 'calc(100vh - 100px)';
const LoadingComponent = (props: any): JSX.Element => {
  return (
    <div style={{ height: loadingPageHeight }}>
      <ComponentPage>
        <PageHeader pageTitle={props.title} backgroundColor="#038387" />
      </ComponentPage>
    </div>
  );
};
export const referencePages: INavPage[] = [
  {
    title: 'AutoScroll',
    url: '#/components/references/autoscroll',
    isFilterable: true,
    component: () => <LoadingComponent title="AutoScroll" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/AutoScrollComponentPage').AutoScrollComponentPage))
  },
  {
    title: 'BaseComponent',
    url: '#/components/references/basecomponent',
    isFilterable: true,
    component: () => <LoadingComponent title="BaseComponent" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/BaseComponentComponentPage').BaseComponentComponentPage))
  },
  {
    title: 'DelayedRender',
    url: '#/components/references/delayedrender',
    isFilterable: true,
    component: () => <LoadingComponent title="DelayedRender" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/DelayedRenderComponentPage').DelayedRenderComponentPage))
  },
  {
    title: 'EventGroup',
    url: '#/components/references/eventgroup',
    isFilterable: true,
    component: () => <LoadingComponent title="EventGroup" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/EventGroupComponentPage').EventGroupComponentPage))
  },
  {
    title: 'FabricPerformance',
    url: '#/components/references/fabricperformance',
    isFilterable: true,
    component: () => <LoadingComponent title="FabricPerformance" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/FabricPerformanceComponentPage').FabricPerformanceComponentPage)
      )
  },
  {
    title: 'GlobalSettings',
    url: '#/components/references/globalsettings',
    isFilterable: true,
    component: () => <LoadingComponent title="GlobalSettings" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/GlobalSettingsComponentPage').GlobalSettingsComponentPage))
  },
  {
    title: 'IAnimationStyles',
    url: '#/components/references/ianimationstyles',
    isFilterable: true,
    component: () => <LoadingComponent title="IAnimationStyles" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IAnimationStylesComponentPage').IAnimationStylesComponentPage))
  },
  {
    title: 'IBaseProps',
    url: '#/components/references/ibaseprops',
    isFilterable: true,
    component: () => <LoadingComponent title="IBaseProps" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IBasePropsComponentPage').IBasePropsComponentPage))
  },
  {
    title: 'IChangeDescription',
    url: '#/components/references/ichangedescription',
    isFilterable: true,
    component: () => <LoadingComponent title="IChangeDescription" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/IChangeDescriptionComponentPage').IChangeDescriptionComponentPage)
      )
  },
  {
    title: 'IChangeEventCallback',
    url: '#/components/references/ichangeeventcallback',
    isFilterable: true,
    component: () => <LoadingComponent title="IChangeEventCallback" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/IChangeEventCallbackComponentPage').IChangeEventCallbackComponentPage)
      )
  },
  {
    title: 'IDisposable',
    url: '#/components/references/idisposable',
    isFilterable: true,
    component: () => <LoadingComponent title="IDisposable" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IDisposableComponentPage').IDisposableComponentPage))
  },
  {
    title: 'IFontFace',
    url: '#/components/references/ifontface',
    isFilterable: true,
    component: () => <LoadingComponent title="IFontFace" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IFontFaceComponentPage').IFontFaceComponentPage))
  },
  {
    title: 'IFontStyles',
    url: '#/components/references/ifontstyles',
    isFilterable: true,
    component: () => <LoadingComponent title="IFontStyles" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IFontStylesComponentPage').IFontStylesComponentPage))
  },
  {
    title: 'IPalette',
    url: '#/components/references/ipalette',
    isFilterable: true,
    component: () => <LoadingComponent title="IPalette" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IPaletteComponentPage').IPaletteComponentPage))
  },
  {
    title: 'IPoint',
    url: '#/components/references/ipoint',
    isFilterable: true,
    component: () => <LoadingComponent title="IPoint" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/IPointComponentPage').IPointComponentPage))
  },
  {
    title: 'IRawFontStyle',
    url: '#/components/references/irawfontstyle',
    isFilterable: true,
    component: () => <LoadingComponent title="IRawFontStyle" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IRawFontStyleComponentPage').IRawFontStyleComponentPage))
  },
  {
    title: 'IRawStyleBase',
    url: '#/components/references/irawstylebase',
    isFilterable: true,
    component: () => <LoadingComponent title="IRawStyleBase" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IRawStyleBaseComponentPage').IRawStyleBaseComponentPage))
  },
  {
    title: 'IRawStyle',
    url: '#/components/references/irawstyle',
    isFilterable: true,
    component: () => <LoadingComponent title="IRawStyle" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IRawStyleComponentPage').IRawStyleComponentPage))
  },
  {
    title: 'IRectangle',
    url: '#/components/references/irectangle',
    isFilterable: true,
    component: () => <LoadingComponent title="IRectangle" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IRectangleComponentPage').IRectangleComponentPage))
  },
  {
    title: 'IRenderComponent',
    url: '#/components/references/irendercomponent',
    isFilterable: true,
    component: () => <LoadingComponent title="IRenderComponent" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IRenderComponentComponentPage').IRenderComponentComponentPage))
  },
  {
    title: 'IScheme',
    url: '#/components/references/ischeme',
    isFilterable: true,
    component: () => <LoadingComponent title="IScheme" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ISchemeComponentPage').ISchemeComponentPage))
  },
  {
    title: 'ISemanticColors',
    url: '#/components/references/isemanticcolors',
    isFilterable: true,
    component: () => <LoadingComponent title="ISemanticColors" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ISemanticColorsComponentPage').ISemanticColorsComponentPage))
  },
  {
    title: 'ISemanticTextColors',
    url: '#/components/references/isemantictextcolors',
    isFilterable: true,
    component: () => <LoadingComponent title="ISemanticTextColors" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/ISemanticTextColorsComponentPage').ISemanticTextColorsComponentPage)
      )
  },
  {
    title: 'ISize',
    url: '#/components/references/isize',
    isFilterable: true,
    component: () => <LoadingComponent title="ISize" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ISizeComponentPage').ISizeComponentPage))
  },
  {
    title: 'IStyleBaseArray',
    url: '#/components/references/istylebasearray',
    isFilterable: true,
    component: () => <LoadingComponent title="IStyleBaseArray" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IStyleBaseArrayComponentPage').IStyleBaseArrayComponentPage))
  },
  {
    title: 'ITheme',
    url: '#/components/references/itheme',
    isFilterable: true,
    component: () => <LoadingComponent title="ITheme" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/IThemeComponentPage').IThemeComponentPage))
  },
  {
    title: 'Rectangle',
    url: '#/components/references/rectangle',
    isFilterable: true,
    component: () => <LoadingComponent title="Rectangle" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/RectangleComponentPage').RectangleComponentPage))
  }
];
