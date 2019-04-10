import * as React from 'react';
import { IPalettePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IPalettePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IPaletteComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IPalette" backgroundColor="#038387" />
          <IPalettePage />
        </ComponentPage>
      </div>
    );
  }
}
