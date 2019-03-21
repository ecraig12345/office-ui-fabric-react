import * as React from 'react';
import { ImagePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ImagePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ImageComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Image" backgroundColor="#038387" />
          <ImagePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
