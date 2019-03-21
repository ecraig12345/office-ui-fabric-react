import * as React from 'react';
import { AutofillPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/AutofillPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class AutofillComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Autofill" backgroundColor="#038387" />
          <AutofillPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
