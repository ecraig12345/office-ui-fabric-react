import * as React from 'react';
import { MessageBarPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/MessageBarPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class MessageBarComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="MessageBar" backgroundColor="#038387" />
          <MessageBarPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
