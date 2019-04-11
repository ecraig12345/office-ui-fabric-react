import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { SelectionPageProps } from 'office-ui-fabric-react/lib/utilities/selection/Selection.doc';

export const SelectionPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SelectionPageProps, ...props }} />;
