import * as React from 'react';
import { ComboBoxPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ComboBoxPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ComboBoxComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ComboBox" backgroundColor="#038387" />
          <ComboBoxPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
