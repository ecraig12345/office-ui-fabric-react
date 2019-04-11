import * as React from 'react';
import { AnnouncedBulkOperationsPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';

export const AnnouncedBulkOperationsPage = (props: Partial<IDemoPageProps>) => (
  <div>
    <DemoPage {...{ ...AnnouncedBulkOperationsPageProps, ...props }} />
  </div>
);
