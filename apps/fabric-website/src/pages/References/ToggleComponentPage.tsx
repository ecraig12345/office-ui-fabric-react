import * as React from 'react';
import { TogglePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/TogglePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ToggleComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Toggle" backgroundColor="#038387" />
          <TogglePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
