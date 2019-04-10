import * as React from 'react';

import { TextPageProps } from 'office-ui-fabric-react/lib/components/Text/Text.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

export const TextPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...TextPageProps, ...props }} />;
