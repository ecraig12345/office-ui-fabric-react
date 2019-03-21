import * as React from 'react';
import { FloatingPickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/FloatingPickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class FloatingPickerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="FloatingPicker" backgroundColor="#038387" />
          <FloatingPickerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
