import * as React from 'react';
import { ScrollablePanePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ScrollablePanePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ScrollablePaneComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ScrollablePane" backgroundColor="#038387" />
          <ScrollablePanePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
