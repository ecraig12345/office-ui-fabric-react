import * as React from 'react';

import { BreadcrumbPageProps } from 'office-ui-fabric-react/lib/components/Breadcrumb/Breadcrumb.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

export const BreadcrumbPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...BreadcrumbPageProps, ...props }} />;
