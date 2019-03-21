import * as React from 'react';
import { ExtendedPeoplePickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ExtendedPeoplePickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ExtendedPeoplePickerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ExtendedPeoplePicker" backgroundColor="#038387" />
          <ExtendedPeoplePickerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
