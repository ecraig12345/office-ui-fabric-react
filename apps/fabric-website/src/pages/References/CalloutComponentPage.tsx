import * as React from 'react';
import { CalloutPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/CalloutPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class CalloutComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Callout" backgroundColor="#038387" />
          <CalloutPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
