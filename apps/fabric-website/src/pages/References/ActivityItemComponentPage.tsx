import * as React from 'react';
import { ActivityItemPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ActivityItemPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ActivityItemComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ActivityItem" backgroundColor="#038387" />
          <ActivityItemPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
