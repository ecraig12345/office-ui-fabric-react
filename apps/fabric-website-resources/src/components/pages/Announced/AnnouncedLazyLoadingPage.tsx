import * as React from 'react';
import { AnnouncedLazyLoadingPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageBasicProps } from '../../DemoPage.types';

export const AnnouncedLazyLoadingPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <div>
    <DemoPage {...{ ...AnnouncedLazyLoadingPageProps, ...props }} />
  </div>
);
