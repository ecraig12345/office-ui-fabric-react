import * as React from 'react';
import { RectanglePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/RectanglePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class RectangleComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Rectangle" backgroundColor="#038387" />
          <RectanglePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
