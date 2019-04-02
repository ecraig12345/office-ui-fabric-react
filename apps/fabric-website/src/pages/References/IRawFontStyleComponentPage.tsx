import * as React from 'react';
import { IRawFontStylePage } from '@uifabric/fabric-website-resources/lib/components/pages/References/IRawFontStylePage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class IRawFontStyleComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="IRawFontStyle" backgroundColor="#038387" />
          <IRawFontStylePage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
