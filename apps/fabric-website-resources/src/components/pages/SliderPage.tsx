import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { SliderPageProps } from 'office-ui-fabric-react/lib/components/Slider/Slider.doc';

export const SliderPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SliderPageProps, ...props }} />;
