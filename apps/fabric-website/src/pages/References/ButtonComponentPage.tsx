import * as React from 'react';
import { ButtonPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/ButtonPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class ButtonComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Button" backgroundColor="#038387" />
          <ButtonPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
