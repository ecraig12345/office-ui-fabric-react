import * as React from 'react';
import { EventGroupPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/EventGroupPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class EventGroupComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="EventGroup" backgroundColor="#038387" />
          <EventGroupPage />
        </ComponentPage>
      </div>
    );
  }
}
