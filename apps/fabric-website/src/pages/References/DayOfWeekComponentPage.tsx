import * as React from 'react';
import { DayOfWeekPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DayOfWeekPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DayOfWeekComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="DayOfWeek" backgroundColor="#038387" />
          <DayOfWeekPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
