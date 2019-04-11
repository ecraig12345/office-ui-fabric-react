import * as React from 'react';
import { AnnouncedSearchResultsPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';

export const AnnouncedSearchResultsPage = (props: Partial<IDemoPageProps>) => (
  <div>
    <DemoPage {...{ ...AnnouncedSearchResultsPageProps, ...props }} />
  </div>
);
