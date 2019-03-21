import * as React from 'react';
import { SwatchColorPickerPage } from '@uifabric/fabric-website-resources/lib/components/pages/References/SwatchColorPickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class SwatchColorPickerComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader pageTitle="SwatchColorPicker" backgroundColor="#038387" />
          <SwatchColorPickerPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
