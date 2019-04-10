import * as React from 'react';
import { IRenderComponentPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IRenderComponentPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IRenderComponentComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IRenderComponent" backgroundColor="#038387" />
          <IRenderComponentPage />
        </ComponentPage>
      </div>
    );
  }
}
