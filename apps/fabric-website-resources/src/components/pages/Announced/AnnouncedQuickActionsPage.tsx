import * as React from 'react';
import { AnnouncedQuickActionsPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';

export const AnnouncedQuickActionsPage = (props: Partial<IDemoPageProps>) => (
  <div>
    <DemoPage {...{ ...AnnouncedQuickActionsPageProps, ...props }} />
  </div>
);
