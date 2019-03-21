import * as React from 'react';
import { SelectedItemsListPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/SelectedItemsListPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class SelectedItemsListComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="SelectedItemsList" backgroundColor="#038387" />
          <SelectedItemsListPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
