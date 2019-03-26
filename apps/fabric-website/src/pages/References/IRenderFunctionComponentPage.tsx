import * as React from 'react';
import { IRenderFunctionPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IRenderFunctionPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IRenderFunctionComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IRenderFunction" backgroundColor="#038387" />
          <IRenderFunctionPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
