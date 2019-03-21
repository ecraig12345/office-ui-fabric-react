import * as React from 'react';
import { ListPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ListPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ListComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="List" backgroundColor="#038387" />
          <ListPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
