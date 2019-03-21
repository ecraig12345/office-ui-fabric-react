import * as React from 'react';
import { SelectableOptionPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/SelectableOptionPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class SelectableOptionComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="SelectableOption" backgroundColor="#038387" />
          <SelectableOptionPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
