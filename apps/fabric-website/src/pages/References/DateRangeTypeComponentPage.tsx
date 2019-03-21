import * as React from 'react';
import { DateRangeTypePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DateRangeTypePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DateRangeTypeComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="DateRangeType" backgroundColor="#038387" />
          <DateRangeTypePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
