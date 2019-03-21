import * as React from 'react';
import { KeytipPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/KeytipPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class KeytipComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Keytip" backgroundColor="#038387" />
          <KeytipPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
