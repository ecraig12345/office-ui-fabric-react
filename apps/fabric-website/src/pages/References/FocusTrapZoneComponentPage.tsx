import * as React from 'react';
import { FocusTrapZonePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/FocusTrapZonePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class FocusTrapZoneComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="FocusTrapZone" backgroundColor="#038387" />
          <FocusTrapZonePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
