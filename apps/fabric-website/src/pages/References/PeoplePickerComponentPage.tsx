import * as React from 'react';
import { PeoplePickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/PeoplePickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class PeoplePickerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="PeoplePicker" backgroundColor="#038387" />
          <PeoplePickerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
