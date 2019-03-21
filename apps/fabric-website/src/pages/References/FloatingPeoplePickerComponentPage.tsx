import * as React from 'react';
import { FloatingPeoplePickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/FloatingPeoplePickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class FloatingPeoplePickerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="FloatingPeoplePicker" backgroundColor="#038387" />
          <FloatingPeoplePickerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
