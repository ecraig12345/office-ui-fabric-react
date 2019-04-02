import * as React from 'react';
import { IPointPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IPointPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IPointComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IPoint" backgroundColor="#038387" />
          <IPointPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
