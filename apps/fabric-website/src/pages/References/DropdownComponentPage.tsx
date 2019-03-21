import * as React from 'react';
import { DropdownPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DropdownPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DropdownComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Dropdown" backgroundColor="#038387" />
          <DropdownPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
