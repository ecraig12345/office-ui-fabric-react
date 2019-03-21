import * as React from 'react';
import { ProgressIndicatorPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ProgressIndicatorPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ProgressIndicatorComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ProgressIndicator" backgroundColor="#038387" />
          <ProgressIndicatorPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
