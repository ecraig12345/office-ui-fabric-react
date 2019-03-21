import * as React from 'react';
import { StackPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/StackPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class StackComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Stack" backgroundColor="#038387" />
          <StackPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
