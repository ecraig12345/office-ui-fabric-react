import * as React from 'react';
import { AnnouncedPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/AnnouncedPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class AnnouncedComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Announced" backgroundColor="#038387" />
          <AnnouncedPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
