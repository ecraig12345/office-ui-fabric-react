import * as React from 'react';
import { CheckboxPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/CheckboxPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class CheckboxComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Checkbox" backgroundColor="#038387" />
          <CheckboxPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
