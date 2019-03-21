import * as React from 'react';
import { DividerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DividerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DividerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Divider" backgroundColor="#038387" />
          <DividerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
