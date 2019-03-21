import * as React from 'react';
import { SpinButtonPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/SpinButtonPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class SpinButtonComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="SpinButton" backgroundColor="#038387" />
          <SpinButtonPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
