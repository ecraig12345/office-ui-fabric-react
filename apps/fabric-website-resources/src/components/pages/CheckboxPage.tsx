import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { CheckboxPageProps } from 'office-ui-fabric-react/lib/components/Checkbox/Checkbox.doc';

export const CheckboxPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...CheckboxPageProps, ...props }} />;
