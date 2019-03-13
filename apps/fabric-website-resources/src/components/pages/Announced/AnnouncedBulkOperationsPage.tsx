import * as React from 'react';
import { AnnouncedBulkOperationsPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';

export const AnnouncedBulkOperationsPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <div>
    <DemoPage {...{ ...AnnouncedBulkOperationsPageProps, ...props }} />
  </div>
);
