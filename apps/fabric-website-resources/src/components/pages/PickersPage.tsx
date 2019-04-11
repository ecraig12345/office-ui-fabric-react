import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { PickersPageProps } from 'office-ui-fabric-react/lib/components/pickers/Pickers.doc';

export const PickersPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...PickersPageProps, ...props }} />;
