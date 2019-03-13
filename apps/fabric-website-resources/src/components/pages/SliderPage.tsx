import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { SliderPageProps } from 'office-ui-fabric-react/lib/components/Slider/Slider.doc';

export const SliderPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...SliderPageProps, ...props }} />
);
