const fs = require('fs');
const path = require('path');

module.exports = function generateReferencePages() {
  fs.readdir(path.resolve(__dirname, '../../apps/fabric-website/src/pages/References'), (err, files) => {
    if (err) {
      console.log('read dir error: ' + err);
    }

    let pageNames = files;
    let referencePages = [];
    for (let file of files) {
      let reference = file.replace('ComponentPage.tsx', '');
      referencePages.push(`
    {
      title: '${reference}',
      url: '#/components/references/${reference.toLowerCase()}',
      isFilterable: true,
      component: () => <LoadingComponent title="${reference}" />,
      getComponent: cb =>
        require.ensure([], require => cb(require<any>('../../pages/References/${reference}ComponentPage').${reference}ComponentPage))
    }`);
    }
    const content =
      `
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
export const referencePages: INavPage[] = [` +
      referencePages.toString() +
      '];';
    fs.writeFileSync(path.resolve(__dirname, '../../apps/fabric-website/src/components/App/referencePage.tsx'), content);
  });

  fs.readdir(path.resolve(__dirname, '../../apps/fabric-website-resources/src/components/pages/References'), (err, files) => {
    if (err) {
      console.log('read dir error: ' + err);
    }

    let pageNames = files;
    let referencePages = [];
    for (let file of files) {
      let reference = file.replace('Page.tsx', '');
      referencePages.push(`
      {
        component: require<any>('./components/pages/References/${reference}Page').${reference}Page,
        key: '${reference}',
        name: '${reference}',
        url: '#/examples/references/${reference.toLowerCase()}'
      }`);
    }
    const content =
      `
      import { IAppLink } from '@uifabric/example-app-base';

export const referencePages: IAppLink[] = [` +
      referencePages.toString() +
      '];';
    fs.writeFileSync(path.resolve(__dirname, '../../apps/fabric-website-resources/src/referencePage.tsx'), content);
  });
};
