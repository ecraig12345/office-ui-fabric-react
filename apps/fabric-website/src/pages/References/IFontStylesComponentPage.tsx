import * as React from 'react';
import { IFontStylesPage } from '@uifabric/fabric-website-resources/lib/components/pages/IFontStylesPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IFontStylesComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IFontStyles" backgroundColor="#038387" />
          <IFontStylesPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
