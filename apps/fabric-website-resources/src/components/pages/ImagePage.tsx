import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { ImagePageProps } from 'office-ui-fabric-react/lib/components/Image/Image.doc';

export const ImagePage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ImagePageProps, ...props }} />;
