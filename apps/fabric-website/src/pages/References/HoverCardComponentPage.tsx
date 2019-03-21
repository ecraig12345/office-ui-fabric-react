import * as React from 'react';
import { HoverCardPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/HoverCardPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class HoverCardComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="HoverCard" backgroundColor="#038387" />
          <HoverCardPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
