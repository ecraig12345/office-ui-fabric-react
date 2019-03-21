import * as React from 'react';
import { ExtendedPickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ExtendedPickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ExtendedPickerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ExtendedPicker" backgroundColor="#038387" />
          <ExtendedPickerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
