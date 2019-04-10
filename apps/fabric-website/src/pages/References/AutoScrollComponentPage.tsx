import * as React from 'react';
import { AutoScrollPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/AutoScrollPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class AutoScrollComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="AutoScroll" backgroundColor="#038387" />
          <AutoScrollPage />
        </ComponentPage>
      </div>
    );
  }
}
