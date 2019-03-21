import * as React from 'react';
import { DatePickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DatePickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DatePickerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="DatePicker" backgroundColor="#038387" />
          <DatePickerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
