import * as React from 'react';
import { SearchBoxPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/SearchBoxPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class SearchBoxComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="SearchBox" backgroundColor="#038387" />
          <SearchBoxPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
