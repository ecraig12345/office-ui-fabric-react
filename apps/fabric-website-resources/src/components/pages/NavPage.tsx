import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { NavPageProps } from 'office-ui-fabric-react/lib/components/Nav/Nav.doc';

export const NavPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...NavPageProps, ...props }} />;
