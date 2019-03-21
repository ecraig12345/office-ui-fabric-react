import * as React from 'react';
import { ShimmerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ShimmerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ShimmerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Shimmer" backgroundColor="#038387" />
          <ShimmerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
