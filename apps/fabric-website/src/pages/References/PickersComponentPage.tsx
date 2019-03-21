import * as React from 'react';
import { PickersPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/PickersPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class PickersComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Pickers" backgroundColor="#038387" />
          <PickersPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
