import * as React from 'react';
import { IDisposablePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IDisposablePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IDisposableComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IDisposable" backgroundColor="#038387" />
          <IDisposablePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
