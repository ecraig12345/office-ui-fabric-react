import * as React from 'react';
import { AnnouncedSearchResultsPage } from '@uifabric/fabric-website-resources/lib/components/pages/Announced/AnnouncedSearchResultsPage';
import { ComponentPage } from '../../../components/ComponentPage/ComponentPage';
import * as pageStyles from '../../PageStyles.module.scss';

export class AnnouncedSearchResultsComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <AnnouncedSearchResultsPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
