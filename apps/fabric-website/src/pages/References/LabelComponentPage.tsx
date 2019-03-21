import * as React from 'react';
import { LabelPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/LabelPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class LabelComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Label" backgroundColor="#038387" />
          <LabelPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
