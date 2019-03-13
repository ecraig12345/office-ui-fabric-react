import * as React from 'react';
import { AnnouncedQuickActionsPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';

export const AnnouncedQuickActionsPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <div>
    <DemoPage {...{ ...AnnouncedQuickActionsPageProps, ...props }} />
  </div>
);
