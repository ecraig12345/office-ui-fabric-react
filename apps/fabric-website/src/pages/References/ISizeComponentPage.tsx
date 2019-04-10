import * as React from 'react';
import { ISizePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ISizePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ISizeComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ISize" backgroundColor="#038387" />
          <ISizePage />
        </ComponentPage>
      </div>
    );
  }
}
