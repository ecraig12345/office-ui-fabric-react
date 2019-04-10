import * as React from 'react';
import { IChangeDescriptionPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IChangeDescriptionPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IChangeDescriptionComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IChangeDescription" backgroundColor="#038387" />
          <IChangeDescriptionPage />
        </ComponentPage>
      </div>
    );
  }
}
