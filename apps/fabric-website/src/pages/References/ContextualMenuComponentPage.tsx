import * as React from 'react';
import { ContextualMenuPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ContextualMenuPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ContextualMenuComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ContextualMenu" backgroundColor="#038387" />
          <ContextualMenuPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
