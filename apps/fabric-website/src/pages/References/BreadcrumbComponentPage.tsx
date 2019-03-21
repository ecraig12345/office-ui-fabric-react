import * as React from 'react';
import { BreadcrumbPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/BreadcrumbPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class BreadcrumbComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Breadcrumb" backgroundColor="#038387" />
          <BreadcrumbPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
