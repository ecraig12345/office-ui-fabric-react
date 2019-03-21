import * as React from 'react';
import { FocusZonePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/FocusZonePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class FocusZoneComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="FocusZone" backgroundColor="#038387" />
          <FocusZonePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
