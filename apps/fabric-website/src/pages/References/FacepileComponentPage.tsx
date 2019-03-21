import * as React from 'react';
import { FacepilePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/FacepilePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class FacepileComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Facepile" backgroundColor="#038387" />
          <FacepilePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
