import * as React from 'react';
import { IChangeEventCallbackPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IChangeEventCallbackPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IChangeEventCallbackComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IChangeEventCallback" backgroundColor="#038387" />
          <IChangeEventCallbackPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
