import * as React from 'react';
import { IAnimationStylesPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IAnimationStylesPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IAnimationStylesComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IAnimationStyles" backgroundColor="#038387" />
          <IAnimationStylesPage />
        </ComponentPage>
      </div>
    );
  }
}
