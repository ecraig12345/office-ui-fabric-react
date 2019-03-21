import * as React from 'react';
import { PopupPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/PopupPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class PopupComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Popup" backgroundColor="#038387" />
          <PopupPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
