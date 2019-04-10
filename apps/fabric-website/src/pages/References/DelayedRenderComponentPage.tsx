import * as React from 'react';
import { DelayedRenderPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DelayedRenderPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DelayedRenderComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="DelayedRender" backgroundColor="#038387" />
          <DelayedRenderPage />
        </ComponentPage>
      </div>
    );
  }
}
