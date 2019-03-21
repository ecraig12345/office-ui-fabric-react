import * as React from 'react';
import { RatingPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/RatingPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class RatingComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Rating" backgroundColor="#038387" />
          <RatingPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
