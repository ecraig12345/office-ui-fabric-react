import * as React from 'react';
import { AnnouncedLazyLoadingPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';

export const AnnouncedLazyLoadingPage = (props: Partial<IDemoPageProps>) => (
  <div>
    <DemoPage {...{ ...AnnouncedLazyLoadingPageProps, ...props }} />
  </div>
);
