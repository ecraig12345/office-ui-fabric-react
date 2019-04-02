import * as React from 'react';
import { IStyleBaseArrayPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IStyleBaseArrayPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IStyleBaseArrayComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IStyleBaseArray" backgroundColor="#038387" />
          <IStyleBaseArrayPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
