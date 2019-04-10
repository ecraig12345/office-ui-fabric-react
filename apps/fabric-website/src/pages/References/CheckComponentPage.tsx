import * as React from 'react';
import { CheckPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/CheckPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class CheckComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Check" backgroundColor="#038387" />
          <CheckPage />
        </ComponentPage>
      </div>
    );
  }
}
