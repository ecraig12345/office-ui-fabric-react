import * as React from 'react';
import { FirstWeekOfYearPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/FirstWeekOfYearPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class FirstWeekOfYearComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="FirstWeekOfYear" backgroundColor="#038387" />
          <FirstWeekOfYearPage />
        </ComponentPage>
      </div>
    );
  }
}
