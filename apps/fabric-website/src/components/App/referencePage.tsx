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
    title: 'BaseComponent',
    url: '#/references/basecomponent',
    isFilterable: true,
    component: () => <LoadingComponent title="BaseComponent" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/BaseComponentComponentPage').BaseComponentComponentPage))
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
    title: 'IRawStyle',
    url: '#/references/irawstyle',
    isFilterable: true,
    component: () => <LoadingComponent title="IRawStyle" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IRawStyleComponentPage').IRawStyleComponentPage))
  },
  {
    title: 'IRenderFunction',
    url: '#/references/irenderfunction',
    isFilterable: true,
    component: () => <LoadingComponent title="IRenderFunction" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IRenderFunctionComponentPage').IRenderFunctionComponentPage))
  },
  {
    title: 'IScheme',
    url: '#/references/ischeme',
    isFilterable: true,
    component: () => <LoadingComponent title="IScheme" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ISchemeComponentPage').ISchemeComponentPage))
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
      require.ensure([], require =>
        cb(require<any>('../../pages/References/ISemanticTextColorsComponentPage').ISemanticTextColorsComponentPage)
      )
  },
  {
    title: 'ITheme',
    url: '#/references/itheme',
    isFilterable: true,
    component: () => <LoadingComponent title="ITheme" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/IThemeComponentPage').IThemeComponentPage))
  }
];
