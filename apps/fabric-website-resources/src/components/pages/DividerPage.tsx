import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { DividerPageProps } from 'office-ui-fabric-react/lib/components/Divider/Divider.doc';

export const DividerPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DividerPageProps, ...props }} />;
