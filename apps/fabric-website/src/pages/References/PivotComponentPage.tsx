import * as React from 'react';
import { PivotPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/PivotPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class PivotComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Pivot" backgroundColor="#038387" />
          <PivotPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
