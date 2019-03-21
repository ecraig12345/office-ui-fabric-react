import * as React from 'react';
import { DocumentCardPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/DocumentCardPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DocumentCardComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="DocumentCard" backgroundColor="#038387" />
          <DocumentCardPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
