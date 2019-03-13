import * as React from 'react';
import { AnnouncedPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';

export const AnnouncedPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <div>
    <DemoPage {...{ ...AnnouncedPageProps, ...props }} />
  </div>
);
