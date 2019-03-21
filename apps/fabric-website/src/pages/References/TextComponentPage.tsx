import * as React from 'react';
import { TextPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/TextPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class TextComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Text" backgroundColor="#038387" />
          <TextPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
