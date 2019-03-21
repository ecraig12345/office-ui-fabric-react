import * as React from 'react';
import { TeachingBubblePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/TeachingBubblePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class TeachingBubbleComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="TeachingBubble" backgroundColor="#038387" />
          <TeachingBubblePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
