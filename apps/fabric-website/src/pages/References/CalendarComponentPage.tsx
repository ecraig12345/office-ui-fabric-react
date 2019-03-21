import * as React from 'react';
import { CalendarPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/CalendarPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class CalendarComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Calendar" backgroundColor="#038387" />
          <CalendarPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
