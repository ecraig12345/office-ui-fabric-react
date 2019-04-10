import * as React from 'react';
import { FabricPerformancePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/FabricPerformancePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class FabricPerformanceComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="FabricPerformance" backgroundColor="#038387" />
          <FabricPerformancePage />
        </ComponentPage>
      </div>
    );
  }
}
