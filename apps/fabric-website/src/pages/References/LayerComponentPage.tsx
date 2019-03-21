import * as React from 'react';
import { LayerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/LayerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class LayerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Layer" backgroundColor="#038387" />
          <LayerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
