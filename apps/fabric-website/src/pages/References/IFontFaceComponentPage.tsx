import * as React from 'react';
import { IFontFacePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IFontFacePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IFontFaceComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IFontFace" backgroundColor="#038387" />
          <IFontFacePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
