import * as React from 'react';
import { SliderPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/SliderPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class SliderComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="Slider" backgroundColor="#038387" />
          <SliderPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
