import * as React from 'react';
import { ChoiceGroupPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ChoiceGroupPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ChoiceGroupComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ChoiceGroup" backgroundColor="#038387" />
          <ChoiceGroupPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
