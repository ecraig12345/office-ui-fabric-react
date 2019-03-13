import * as React from 'react';

import { BreadcrumbPageProps } from 'office-ui-fabric-react/lib/components/Breadcrumb/Breadcrumb.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

export const BreadcrumbPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...BreadcrumbPageProps, ...props }} />
);
