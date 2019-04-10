import * as React from 'react';
import { AnnouncedPageProps } from 'office-ui-fabric-react/lib/components/Announced/Announced.doc';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';

export const AnnouncedPage = (props: Partial<IDemoPageProps>) => (
  <div>
    <DemoPage {...{ ...AnnouncedPageProps, ...props }} />
  </div>
);
