import * as React from 'react';
import { CommandBarPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/CommandBarPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class CommandBarComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="CommandBar" backgroundColor="#038387" />
          <CommandBarPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
