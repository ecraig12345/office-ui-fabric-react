import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { TextFieldPageProps } from 'office-ui-fabric-react/lib/components/TextField/TextField.doc';

export const TextFieldPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...TextFieldPageProps, ...props }} />;
