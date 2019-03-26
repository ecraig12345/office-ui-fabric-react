import * as React from 'react';
import { BaseComponentPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/BaseComponentPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class BaseComponentComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="BaseComponent" backgroundColor="#038387" />
          <BaseComponentPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
