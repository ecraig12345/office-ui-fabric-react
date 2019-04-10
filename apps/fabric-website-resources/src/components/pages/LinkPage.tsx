import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { LinkPageProps } from 'office-ui-fabric-react/lib/components/Link/Link.doc';

export const LinkPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...LinkPageProps, ...props }} />;
