import * as React from 'react';
import { IRectanglePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IRectanglePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IRectangleComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IRectangle" backgroundColor="#038387" />
          <IRectanglePage />
        </ComponentPage>
      </div>
    );
  }
}
