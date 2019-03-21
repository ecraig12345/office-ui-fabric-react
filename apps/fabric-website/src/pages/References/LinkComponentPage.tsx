import * as React from 'react';
import { LinkPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/LinkPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class LinkComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Link" backgroundColor="#038387" />
          <LinkPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
