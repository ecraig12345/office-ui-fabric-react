import * as React from 'react';
import { AnnouncedSearchResultsPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';

export const AnnouncedSearchResultsPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <div>
    <DemoPage {...{ ...AnnouncedSearchResultsPageProps, ...props }} />
  </div>
);
