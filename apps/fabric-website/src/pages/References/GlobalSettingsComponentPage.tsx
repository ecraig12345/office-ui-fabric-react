import * as React from 'react';
import { GlobalSettingsPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/GlobalSettingsPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class GlobalSettingsComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="GlobalSettings" backgroundColor="#038387" />
          <GlobalSettingsPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
