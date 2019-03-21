import * as React from 'react';
import { OverflowSetPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/OverflowSetPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class OverflowSetComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="OverflowSet" backgroundColor="#038387" />
          <OverflowSetPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
