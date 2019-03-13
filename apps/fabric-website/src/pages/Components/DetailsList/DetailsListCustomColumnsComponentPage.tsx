import * as React from 'react';
// tslint:disable-next-line:max-line-length
import { DetailsListCustomColumnsPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListCustomColumnsPage';

export class DetailsListCustomColumnsComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return <DetailsListCustomColumnsPage isHeaderVisible={false} />;
  }
}
