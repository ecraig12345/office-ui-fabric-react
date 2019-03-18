import * as React from 'react';
import { ISemanticTextColorsPage } from '@uifabric/fabric-website-resources/lib/components/pages/ISemanticTextColorsPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ISemanticTextColorsComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="ISemanticTextColors" backgroundColor="#038387" />
          <ISemanticTextColorsPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
