import * as React from 'react';
import { PositioningContainerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/PositioningContainerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class PositioningContainerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="PositioningContainer" backgroundColor="#038387" />
          <PositioningContainerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
