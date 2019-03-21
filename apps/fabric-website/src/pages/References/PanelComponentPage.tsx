import * as React from 'react';
import { PanelPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/PanelPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class PanelComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Panel" backgroundColor="#038387" />
          <PanelPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
