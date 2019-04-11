import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { IconPageProps } from 'office-ui-fabric-react/lib/components/Icon/Icon.doc';

export const IconPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...IconPageProps, ...props }} />;
