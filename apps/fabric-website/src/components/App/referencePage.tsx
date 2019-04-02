
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
      url: '#/references/autoscroll',
      isFilterable: true,
      component: () => <LoadingComponent title="AutoScroll" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/AutoScrollComponentPage').AutoScrollComponentPage))
    },
    {
      title: 'BaseComponent',
      url: '#/references/basecomponent',
      isFilterable: true,
      component: () => <LoadingComponent title="BaseComponent" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/BaseComponentComponentPage').BaseComponentComponentPage))
    },
    {
      title: 'DelayedRender',
      url: '#/references/delayedrender',
      isFilterable: true,
      component: () => <LoadingComponent title="DelayedRender" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/DelayedRenderComponentPage').DelayedRenderComponentPage))
    },
    {
      title: 'EventGroup',
      url: '#/references/eventgroup',
      isFilterable: true,
      component: () => <LoadingComponent title="EventGroup" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/EventGroupComponentPage').EventGroupComponentPage))
    },
    {
      title: 'FabricPerformance',
      url: '#/references/fabricperformance',
      isFilterable: true,
      component: () => <LoadingComponent title="FabricPerformance" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/FabricPerformanceComponentPage').FabricPerformanceComponentPage))
    },
    {
      title: 'GlobalSettings',
      url: '#/references/globalsettings',
      isFilterable: true,
      component: () => <LoadingComponent title="GlobalSettings" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/GlobalSettingsComponentPage').GlobalSettingsComponentPage))
    },
    {
      title: 'IAnimationStyles',
      url: '#/references/ianimationstyles',
      isFilterable: true,
      component: () => <LoadingComponent title="IAnimationStyles" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IAnimationStylesComponentPage').IAnimationStylesComponentPage))
    },
    {
      title: 'IBaseProps',
      url: '#/references/ibaseprops',
      isFilterable: true,
      component: () => <LoadingComponent title="IBaseProps" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IBasePropsComponentPage').IBasePropsComponentPage))
    },
    {
      title: 'IChangeDescription',
      url: '#/references/ichangedescription',
      isFilterable: true,
      component: () => <LoadingComponent title="IChangeDescription" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IChangeDescriptionComponentPage').IChangeDescriptionComponentPage))
    },
    {
      title: 'IChangeEventCallback',
      url: '#/references/ichangeeventcallback',
      isFilterable: true,
      component: () => <LoadingComponent title="IChangeEventCallback" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IChangeEventCallbackComponentPage').IChangeEventCallbackComponentPage))
    },
    {
      title: 'IDisposable',
      url: '#/references/idisposable',
      isFilterable: true,
      component: () => <LoadingComponent title="IDisposable" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IDisposableComponentPage').IDisposableComponentPage))
    },
    {
      title: 'IFontFace',
      url: '#/references/ifontface',
      isFilterable: true,
      component: () => <LoadingComponent title="IFontFace" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IFontFaceComponentPage').IFontFaceComponentPage))
    },
    {
      title: 'IFontStyles',
      url: '#/references/ifontstyles',
      isFilterable: true,
      component: () => <LoadingComponent title="IFontStyles" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IFontStylesComponentPage').IFontStylesComponentPage))
    },
    {
      title: 'IPalette',
      url: '#/references/ipalette',
      isFilterable: true,
      component: () => <LoadingComponent title="IPalette" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IPaletteComponentPage').IPaletteComponentPage))
    },
    {
      title: 'IPoint',
      url: '#/references/ipoint',
      isFilterable: true,
      component: () => <LoadingComponent title="IPoint" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IPointComponentPage').IPointComponentPage))
    },
    {
      title: 'IRawStyle',
      url: '#/references/irawstyle',
      isFilterable: true,
      component: () => <LoadingComponent title="IRawStyle" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IRawStyleComponentPage').IRawStyleComponentPage))
    },
    {
      title: 'IRectangle',
      url: '#/references/irectangle',
      isFilterable: true,
      component: () => <LoadingComponent title="IRectangle" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IRectangleComponentPage').IRectangleComponentPage))
    },
    {
      title: 'IRenderComponent',
      url: '#/references/irendercomponent',
      isFilterable: true,
      component: () => <LoadingComponent title="IRenderComponent" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IRenderComponentComponentPage').IRenderComponentComponentPage))
    },
    {
      title: 'IScheme',
      url: '#/references/ischeme',
      isFilterable: true,
      component: () => <LoadingComponent title="IScheme" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/ISchemeComponentPage').ISchemeComponentPage))
    },
    {
      title: 'ISemanticColors',
      url: '#/references/isemanticcolors',
      isFilterable: true,
      component: () => <LoadingComponent title="ISemanticColors" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/ISemanticColorsComponentPage').ISemanticColorsComponentPage))
    },
    {
      title: 'ISemanticTextColors',
      url: '#/references/isemantictextcolors',
      isFilterable: true,
      component: () => <LoadingComponent title="ISemanticTextColors" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/ISemanticTextColorsComponentPage').ISemanticTextColorsComponentPage))
    },
    {
      title: 'ISize',
      url: '#/references/isize',
      isFilterable: true,
      component: () => <LoadingComponent title="ISize" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/ISizeComponentPage').ISizeComponentPage))
    },
    {
      title: 'ITheme',
      url: '#/references/itheme',
      isFilterable: true,
      component: () => <LoadingComponent title="ITheme" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/IThemeComponentPage').IThemeComponentPage))
    },
    {
      title: 'Rectangle',
      url: '#/references/rectangle',
      isFilterable: true,
      component: () => <LoadingComponent title="Rectangle" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/RectangleComponentPage').RectangleComponentPage))
    }];