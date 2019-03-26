import * as React from 'react';
import { IBasePropsPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IBasePropsPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IBasePropsComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IBaseProps" backgroundColor="#038387" />
          <IBasePropsPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
