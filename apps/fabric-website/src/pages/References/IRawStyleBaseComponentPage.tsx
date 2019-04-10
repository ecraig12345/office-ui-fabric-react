import * as React from 'react';
import { IRawStyleBasePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IRawStyleBasePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IRawStyleBaseComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IRawStyleBase" backgroundColor="#038387" />
          <IRawStyleBasePage />
        </ComponentPage>
      </div>
    );
  }
}
