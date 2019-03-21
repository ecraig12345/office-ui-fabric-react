import * as React from 'react';
import { TooltipPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/TooltipPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class TooltipComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Tooltip" backgroundColor="#038387" />
          <TooltipPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
