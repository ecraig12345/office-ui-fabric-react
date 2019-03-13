import * as React from 'react';
import { AnnouncedLazyLoadingPage } from '@uifabric/fabric-website-resources/lib/components/pages/Announced/AnnouncedLazyLoadingPage';
import { ComponentPage } from '../../../components/ComponentPage/ComponentPage';
import * as pageStyles from '../../PageStyles.module.scss';

export class AnnouncedLazyLoadingComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <AnnouncedLazyLoadingPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
