import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { DropdownPageProps } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown.doc';

export const DropdownPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DropdownPageProps, ...props }} />;
