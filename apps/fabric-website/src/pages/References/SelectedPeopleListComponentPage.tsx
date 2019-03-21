import * as React from 'react';
import { SelectedPeopleListPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/SelectedPeopleListPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class SelectedPeopleListComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="SelectedPeopleList" backgroundColor="#038387" />
          <SelectedPeopleListPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
