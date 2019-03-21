import * as React from 'react';
import { DialogPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DialogPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DialogComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Dialog" backgroundColor="#038387" />
          <DialogPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
