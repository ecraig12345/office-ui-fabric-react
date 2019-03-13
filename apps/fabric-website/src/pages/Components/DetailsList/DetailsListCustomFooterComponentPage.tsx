import * as React from 'react';
// tslint:disable-next-line:max-line-length
import { DetailsListCustomFooterPage } from '@uifabric/fabric-website-resources/lib/components/pages/DetailsList/DetailsListCustomFooterPage';

export class DetailsListCustomFooterComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return <DetailsListCustomFooterPage isHeaderVisible={false} />;
  }
}
