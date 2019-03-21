import * as React from 'react';
import { NavPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/NavPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class NavComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Nav" backgroundColor="#038387" />
          <NavPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
