import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { ImagePageProps } from 'office-ui-fabric-react/lib/components/Image/Image.doc';

export const ImagePage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ImagePageProps, ...props }} />
);
